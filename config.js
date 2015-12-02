'use strict';

angular.module('myApp.config', [])

.value('apiURL', 'http://test-be.tsuru.tuzame.com/api/news')
.value('imagesCDNRoot', 'http://test-be.tsuru.tuzame.com/api/storages/uploads/download/');
