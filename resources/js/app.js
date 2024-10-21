import.meta.glob(['../images/**'])

import $ from 'jquery'
window.$ = window.jQuery = $

import axios from 'axios'
window.axios = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.defaults.headers.common['X-CSRF-TOKEN']     = $('meta[name="csrf-token"]').attr('content')

// Added: Actual Bootstrap JavaScript dependency
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap

// Added: Popper.js dependency for popover support in Bootstrap
import '@popperjs/core'
