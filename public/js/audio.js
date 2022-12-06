import tool from '@/utils/tool'
let { throttle, debounce } = tool
;(function ($) {
  var fnName = 'audioPlay'
  //   全局设置
  var config = {
    audioBox: '.audio-box',

    view: '.audio-view',

    title: '.audio-title',

    cover: '.audio-cover',

    autoPlay: false,

    volume: {
      volumeView: '.audio-set-volume',
      volumeBox: '.volume-box'
    },

    timeView: {
      thisTime: '.audio-this-time',

      countTime: '.audio-count-time'
    },

    setbacks: {
      setbacks: '.audio-setbacks',

      thisSetbacks: '.audio-this-setbacks',

      cacheSetbacks: '.audio-cache-setbacks',

      volumeSetbacks: '.volume-box > i',

      volumeCircular: '.volume-box > i span'
    },

    button: {
      volume: '.audio-volume',

      backs: '.audio-backs-btn',

      prev: '.audio-prev',

      play: '.audio-play',

      next: '.audio-next',

      menu: '.audio-menu',

      menuClose: '.menu-close',

      aduioShow: '.audio-show',

      aduioClose: '.audio-colse'
    },

    menu: {
      menuView: '.audio-list',

      colse: '.close',

      list: '.audio-inline'
    },

    song: null
  }
  // 播放音乐的序号和音量
  var songEq = 0,
    volumeSize = 0.8
  // 是否点击播放音频
  //给window对象添加audioPlay对象
  window[fnName] = function (setConfig) {
    // 设置属性值
    if (typeof setConfig == 'object') {
      for (var n in setConfig) {
        config[n] = setConfig[n]
      }
    }
    var _this = config,
      playDate

    var audioBox = $(_this.audioBox),
      cover = $(_this.cover),
      title = $(_this.title),
      thisTime = $(_this.timeView.thisTime),
      countTime = $(_this.timeView.countTime),
      thisSetbacks = $(_this.setbacks.thisSetbacks),
      cacheSetbacks = $(_this.setbacks.cacheSetbacks),
      setbacks = $(_this.setbacks.setbacks),
      volumeCircular = $(_this.setbacks.volumeCircular),
      volumeSetbacks = $(_this.setbacks.volumeSetbacks),
      volumeBox = $(_this.volume.volumeBox),
      play = $(_this.button.play),
      prev = $(_this.button.prev),
      next = $(_this.button.next),
      menuBtn = $(_this.button.menu),
      volume = $(_this.button.volume),
      menuClose = $(_this.button.menuClose),
      backs = $(_this.button.backs),
      aduioShow = $(_this.button.aduioShow),
      aduioClose = $(_this.button.aduioClose),
      html = $('html')
    var timeAudio
    var volumeTime
    // 隐藏音乐播放栏
    audioBox.hide()
    _this.createAudio = function () {
      if (!_this.audio) {
        _this.audio = new Audio()
      }

      var song = config.song
      if (!song) {
        alert('当前歌单没有歌曲!!!')
        return false
      }

      _this.stopAudio()

      _this.audio.src = song[songEq].src

      _this.volumeSet()
      title.text(song[songEq].title || '未知歌曲')
      cover.css({
        backgroundImage: 'url(' + (song[songEq].cover || '') + ')'
      })
      // 设置歌曲的持续时间
      function setDuration() {
        if (isNaN(_this.audio.duration)) {
          setTimeout(setDuration, 50)
        } else {
          countTime.text(_this.conversion(_this.audio.duration))
        }
      }
      setDuration(_this.audio.duration)

      thisTime.text(_this.conversion(_this.audio.currentTime))

      _this.audio.onended = function () {
        setTimeout(function () {
          ++songEq
          songEq = songEq < _this.song.length ? songEq : 0
          _this.selectMenu(songEq, true)
        }, 1000)
      }
    }
    // 播放音乐
    _this.playAudio = function () {
      if (_this.audio) {
        if (!playDate || Date.now() - playDate > 100) {
          playDate = Date.now()

          !_this.audio.paused || _this.audio.pause()

          _this.audio.play()
          play.addClass('audio-stop').one('click', function () {
            _this.stopAudio()
            $(this)
              .removeClass('audio-stop')
              .one('click', function () {
                _this.playAudio()
              })
          })

          timeAudio = setInterval(function () {
            if (_this.audio.readyState == 4) {
              cacheSetbacks.css({
                width: (_this.audio.buffered.end(0) / _this.audio.duration) * 100 + '%'
              })
            }

            thisSetbacks.css({
              width: (_this.audio.currentTime / _this.audio.duration) * 100 + '%'
            })

            thisTime.text(_this.conversion(_this.audio.currentTime))
          }, 500)
        } else {
          setTimeout(function () {
            _this.playAudio()
          }, 50)
        }
      }
      cover.removeClass('roate-animation-pause').addClass('roate-animation-running')
    }
    // 停止音乐
    _this.stopAudio = function () {
      if (!playDate || Date.now() - playDate > 100) {
        playDate = Date.now()
        _this.audio.pause()
        // cover.removeClass('roate-animation')
        clearInterval(timeAudio)
      } else {
        setTimeout(function () {
          _this.stopAudio()
        }, 50)
      }
      cover.removeClass('roate-animation-running').addClass('roate-animation-pause')
    }
    // 数值转化
    _this.conversion = function (num) {
      function changInt(num) {
        return num < 10 ? '0' + num : num
      }

      return changInt(parseInt(num / 60)) + ':' + changInt(Math.floor(num % 60))
    }
    // 遍历歌曲菜单并渲染
    _this.upMenu = function () {
      var song = _this.song,
        inline = $(_this.menu.list).empty()

      for (var i in song) {
        inline.append("<li><a href='javascript:;'>" + (song[i].title || '未知歌曲') + '</a></li>')
      }

      inline
        .find('>li')
        .unbind('click')
        .on('click', function () {
          _this.selectMenu($(this).index(), true)
        })
    }
    // 选择歌曲播放
    _this.selectMenu = function (num, _bool) {
      songEq = num
      _this.createAudio()
      _bool && _this.playAudio()
    }
    // 设置音量大小
    _this.volumeSet = function () {
      _this.audio.volume = volumeSize
      volumeSetbacks.css({
        height: volumeSize * 100 + '%'
      })
    }
    // 鼠标按下调节音量大小事件
    volumeBox.on('mousedown', function () {
      if (_this.audio) {
        var Y,
          EndY = parseInt(volumeBox.css('height')),
          goY
        volumeBox.on('mousemove click', function (e) {
          clearTimeout(volumeTime)

          Y = e.clientY - (volumeBox.offset().top - $(document).scrollTop())
          Y = Y > 0 ? (Y > EndY ? EndY : Y) : 0

          goY = Y / EndY

          volumeSize = 1 - goY

          _this.volumeSet()
        })

        volumeBox
          .one('mouseup', function () {
            volumeBox.unbind('mousemove')
          })
          .on('mouseout', function () {
            volumeTime = setTimeout(function () {
              volumeBox.unbind('mousemove')
            }, 500)
          })
      }
    })
    // 鼠标按下调节播放进度条事件
    setbacks.on('mousedown', function () {
      if (_this.audio) {
        var X,
          EndX = parseInt(setbacks.css('width')),
          goX,
          mouseTime
        setbacks.on('mousemove click', function (e) {
          _this.stopAudio()
          clearTimeout(mouseTime)

          X = e.clientX - setbacks.offset().left
          X = X > 0 ? (X > EndX ? EndX : X) : 0

          goX = X / EndX
          thisSetbacks.css({
            width: goX * 100 + '%'
          })

          _this.audio.currentTime = parseInt(goX * _this.audio.duration)
          thisTime.text(_this.conversion(_this.audio.currentTime))
        })

        setbacks
          .one('mouseup', function () {
            _this.playAudio()
            setbacks.unbind('mousemove')
          })
          .on('mouseout', function () {
            mouseTime = setTimeout(function () {
              _this.playAudio()
              setbacks.unbind('mousemove')
            }, 500)
          })
      }
    })
    //点击播放按钮播放音乐事件
    play.one('click', function () {
      _this.playAudio()
    })
    // 点击菜单按钮显示菜单栏事件
    menuBtn.on('click', function () {
      $(_this.menu.menuView).toggleClass('menu-show')
    })
    // 点击回退按钮上一首歌曲事件
    prev.on('click', function () {
      --songEq
      songEq = songEq >= 0 ? songEq : _this.song.length - 1
      _this.selectMenu(songEq, true)
    })
    // 点击前进按钮下一首歌曲事件
    next.on('click', function () {
      ++songEq
      songEq = songEq < _this.song.length ? songEq : 0
      _this.selectMenu(songEq, true)
    })
    // 点击菜单关闭按钮关闭菜单事件
    menuClose.on('click', function () {
      $(_this.menu.menuView).removeClass('menu-show')
    })
    // 点击音量按钮显示或隐藏音量栏事件
    volume.on('click', function () {
      $(_this.volume.volumeView).toggleClass('audio-show-volume')
    })
    //点击获取音频按钮显示播放栏
    aduioShow.on(
      'click',
      debounce(
        function () {
          aduioClose.css({ display: 'block' })
          aduioShow.css({ display: 'none' })
          audioBox.slideDown()

          let timer1 = setTimeout(() => {
            audioBox.slideUp()
          }, 5000)
          audioBox.hover(
            function () {
              if (timer1) {
                clearTimeout(timer1)
                timer1 = null
              }
            },
            function () {
              audioBox.slideUp()
            }
          )

          //鼠标移入播放栏的区域显示播放器
          html.on(
            'mousemove',
            throttle(function (e) {
              let adHeight = audioBox.height()
              let wdHeight = $(window).height()
              if (e.clientY > wdHeight - adHeight) {
                if (timer1) {
                  clearTimeout(timer1)
                  timer1 = null
                }
                audioBox.slideDown()
              }
            }, 1000)
          )
        },
        500,
        true
      )
    )
    //点击关闭音频按钮关闭播放器
    aduioClose.on('click', function () {
      aduioClose.css({ display: 'none' })
      aduioShow.css({ display: 'block' })
      audioBox.slideUp()
      html.off('mousemove')
      _this.stopAudio()
      play.removeClass('audio-stop')
    })
    _this.upMenu()

    _this.selectMenu(songEq, _this.autoPlay)

    return _this
  }
})(jQuery)
