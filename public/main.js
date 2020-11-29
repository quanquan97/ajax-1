let n = 1; //n会变
getNextPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
// ------------------------------------------------------------------

getJson.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // console.log(typeof request.response);
      // console.log(request.response);
      //const bool = JSON.parse(request.response);
      // console.log(typeof bool);
      // console.log(bool);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};

// ------------------------------------------------------------------
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML; //可以看出AJAX是非常适配XML的，这里使用dom API
      const text = dom.getElementsByTagName("warning")[0].textContent; //getElements是伪数组
      console.log(text.trim());
    }
  };
  request.send();
};

// ------------------------------------------------------------------
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    // 创建 div 标签
    const div = document.createElement("div");
    // 填写 div 内容
    div.innerHTML = request.response;
    // 插入到身体里
    document.body.appendChild(div);
  };
  request.onerror = () => {};
  request.send();
};

// ------------------------------------------------------------------
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    // 创建 script 标签
    const script = document.createElement("script");
    // 填写 script 内容
    script.innerHTML = request.response;
    // 插到身体里
    document.body.appendChild(script);
  };
  request.onerror = () => {};
  request.send();
};
// ------------------------------------------------------------------
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css"); // readyState = 1
  request.onreadystatechange = () => {
    console.log(request.readyState);
    // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
    if (request.readyState === 4 && request.status === 200) {
      // 创建 style 标签
      const style = document.createElement("style");
      // 填写 style 内容
      style.innerHTML = request.response;
      // 插到头里面
      document.head.appendChild(style);
    } else {
      alert("加载 CSS 失败");
    }
  };

  request.send(); // readyState = 2
};
// ------------------------------------------------------------------加油
