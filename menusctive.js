 
      // let user =document.getElementById('user')
      //   user.innerHTML=`<span class="user-name">👤 ${localStorage.getItem("user")}</span>
      //       <img
      //         src="https://i.pravatar.cc/40?img=3"
      //         alt="User Avatar"
      //         class="user-avatar"
      //       />`;

      let menu = document.getElementById("menuList");
      menu.innerHTML =`<li>
            <a href="dashboard.html">🏠 Dashboard</a>
          </li>
          <li><a href="productmodle.html">📦 Products</a></li>
          <li><a href="selling.html">🛒 Sales</a></li>
          <li><a href="report.html">📊 Reports</a></li>
          <li><a href="users.html">👤 Users</a></li>
          <li>
            <a href="settings.html">⚙️ Settings</a>
          </li>
          <li onclick="ActiveMenu()">
            <a href="#" onclick="logout()">🚪 Logout</a>
          </li>`;
      const menuItems = document.querySelectorAll("#menuList li");


      menuItems.forEach((item) => {
        item.addEventListener("click", function () {
          menuItems.forEach((i) => i.classList.remove("active"));
          this.classList.add("active");
        });
      });
    

   
      const currentPath = window.location.pathname;
      const menuLinks = document.querySelectorAll("#menuList li a");

      menuLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath.split("/").pop()) {
          link.parentElement.classList.add("active");
        }
      });

      //logout user
      function logout() {
        if (confirm("Are you sure you want to logout?")) {
          localStorage.removeItem("user");
          window.location.href = "userlogin.html";
        }
      }

      // Show current username
      const username = localStorage.getItem("user");
      if (!username) {
        window.location.href = "userlogin.html";
      } else {
        document.getElementById("userName").textContent = username;
      }
  