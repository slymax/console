Console.js is a JavaScript console for the browser that intercepts console messages and collects errors. This can be useful in environments where no browser console is available.

Console.js can be enabled by adding a script tag to your HTML, preferably at the beginning of the `<body>` tag:

```html
<script src="https://cdn.jsdelivr.net/combine/npm/vue@2/dist/vue.min.js,gh/slymax/console@0.1.1/console.min.js"></script>
```

You can also inject Console.js into an existing website by executing the following in your browser console:

```js
(function(){s=document.createElement("script");s.src="https://cdn.jsdelivr.net/combine/npm/vue@2/dist/vue.min.js,gh/slymax/console@0.1.1/console.min.js";document.head.appendChild(s);}());
```
