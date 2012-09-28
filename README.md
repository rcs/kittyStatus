#Kitty Status

Bring your response code, get it back, with cute pictures to soothe the pain of mocking responses.

## Usage

Open http://kittystatus/[code] and you'll get an http response back with that status code set.

If you open them in a browser, you'll see wonderful things.

Demo available at [kittystatus.herokuapp.com](http://kittystatus.herokuapp.com) .

Examples:


```sh
bash-3.2$ curl -I kittystatus.herokuapp.com/500
HTTP/1.1 500 Internal Server Error
Content-Type: image/jpeg
Date: Fri, 28 Sep 2012 18:05:50 GMT
Connection: keep-alive

bash-3.2$ curl -I kittystatus.herokuapp.com/411
HTTP/1.1 411 Length Required
Content-Type: image/jpeg
Date: Fri, 28 Sep 2012 18:05:54 GMT
Connection: keep-alive

bash-3.2$ curl -I kittystatus.herokuapp.com/413
HTTP/1.1 413 Request Entity Too Large
Content-Type: image/jpeg
Date: Fri, 28 Sep 2012 18:05:56 GMT
Connection: keep-alive

bash-3.2$ curl -I kittystatus.herokuapp.com/201
HTTP/1.1 201 Created
Content-Type: image/jpeg
Date: Fri, 28 Sep 2012 18:06:00 GMT
Connection: keep-alive
```
