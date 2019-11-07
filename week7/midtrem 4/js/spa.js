<!doctype html>
<html ng-app="customersApp" class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nyasia Midterm Practice ET-710</title>

    <!-- *Begin AngularJS -->
        <script src="js/vendor/angular-1.7.8/angular.min.js"></script>
        <script src="js/vendor/angular-1.7.8/angular-animate.min.js"></script>
        <script src="js/vendor/angular-1.7.8/angular-route.min.js"></script>
    <!-- *End AngularJS -->

    <!-- *Begin Datatables.net -->
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/zf/dt-1.10.20/datatables.min.css"/>
        <script type="text/javascript" src="https://cdn.datatables.net/v/zf/dt-1.10.20/datatables.min.js"></script>
    <!-- *End Datatables.net -->

    <!-- *Begin Font Awesome
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    -->
    <!-- The font Awesome code below is several revisions back.
          https://stackoverflow.com/questions/14698589/fontawesome-not-available-as-a-font-family
          I discovered that it would work from an article on stack overflow. all code should at some point be updated to reflect the last calling syntax for font awesome
          -->
          <link href='http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css' rel='stylesheet' type='text/css'>
    <!-- *End Font Awesome -->

    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/app.css">

    <link rel="stylesheet" href="css/nav.css">
    <link rel="stylesheet" href="css/subnav.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/content.css">
    <link rel="stylesheet" href="css/footer.css">

  </head>
  <body>

    <!-- *Begin Nav-->
    <div data-sticky-container>
<div class="sticky" data-sticky data-margin-top="0">
    <nav class="top-bar topbar-responsive">
  <div class="top-bar-title">
    <span data-responsive-toggle="topbar-responsive" data-hide-for="medium">
      <button class="menu-icon" type="button" data-toggle></button>
    </span>
    <a class="topbar-responsive-logo" href="#"><strong>Nyasia Midterm Practice ET-710</strong></a>
  </div>
  <div id="topbar-responsive" class="topbar-responsive-links">
    <div class="top-bar-right">
      <ul class="menu simple vertical medium-horizontal">
        <li><a href="#">Home</a></li>
        <li><a href="about/index.html">About</a></li>
        <li><a href="services/index.html">Services</a></li>
        <li><a href="index.html#!/works">Works</a></li>
        <li><a href="index.html#!/news">News</a></li>
        <li><a href="index.html#!/contact">Contact</a></li>
        <li>
          <button type="button" class="button hollow topbar-responsive-button">Categories</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
    <!-- *End Nav -->


    <!-- *Begin SubNav -->
    <!-- *End SubNav -->


    <!-- *Begin Header -->
    <!-- *End Header -->



    <!-- *Begin Content -->
    <div ng-view></div>
    <!-- *Begin AngularJS -->
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
    <!-- *End AngularJS -->
    <!-- *End Content -->



    <!-- *Begin Footer -->
        <footer class="marketing-site-footer">
        <div class="grid-x grid-padding-x">
            <div class="medium-4 cell">
              <h4 class="marketing-site-footer-name">ET-710</h4>
              <p>Building and maintaining websites.</p>
              <ul class="menu marketing-site-footer-menu-social simple">
                <li><a href="#"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></li>
                 <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                 <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
              </ul>
            </div>
            <div class="medium-4 cell">
               <h4 class="marketing-site-footer-title">Contact Info</h4>
              <div class="marketing-site-footer-block">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>Queensborough Community College<br>Bayside, NY 11364</p>
              </div>
              <div class="marketing-site-footer-block">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>718.631.6262</p>
              </div>
              <div class="marketing-site-footer-block">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <p>mlawrence@qcc.cuny.edu</p>
              </div>
            </div>
            <div class="large-4 cell">
              <h4 class="marketing-site-footer-title">Photos</h4>
                <div class="grid-x grid-padding-y">
    	    	<div class="large-4 medium-6 small-12 cell">
                  <img src="https://placehold.it/75" alt="" />
                </div>
    	    	<div class="large-4 medium-6 small-12 cell">
                  <img src="https://placehold.it/75" alt="" />
                </div>
    	    	<div class="large-4 medium-6 small-12 cell">
                  <img src="https://placehold.it/75" alt="" />
                </div>
    	    	<div class="large-4 medium-6 small-12 cell">
                  <img src="https://placehold.it/75" alt="" />
                </div>
    	    	<div class="large-4 medium-6 small-12 cell">
                  <img src="https://placehold.it/75" alt="" />
                </div>
    	    	<div class="large-4 medium-6 small-12 cell">
                  <img src="https://placehold.it/75" alt="" />
                </div>
              </div>
            </div>
          </div>


          <div class="marketing-site-footer-bottom">
            <div class="row large-unstack align-middle">
              <div class="column">
                <p>&copy; MDLawrence - 2017 All rights reserved</p>
              </div>
              <div class="column">
                <ul class="menu marketing-site-footer-bottom-links">
                  <li><a href="#">Home</a></li>
                  <li><a href="about/index.html">About</a></li>
                  <li><a href="services/index.html">Services</a></li>
                  <li><a href="index.html#!/works">Works</a></li>
                  <li><a href="index.html#!/news">News</a></li>
                  <li><a href="index.html#!/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      <!-- *End Footer -->


    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.js"></script>
    <script src="js/app.js"></script>

    <script src="js/spa.js"></script>

  </body>
</html>
