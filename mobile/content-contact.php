<?php
	// content contact
  include_once('../header-mobile.php');
 ?>
<div id="wrapper">
  <div id="content">
    <div class="container-content">
      <!-- banner-about -->
			<div class="sub-banner">
				<div class="group-banner-about">
					<div class="box-img-text">
						<div class="box-img">
							<div class="gradientb"></div>
							<img src="<?php echo $BATH_URL;?>assets/images/OMB-Advertising-Cambodia-CONTACT-OMB-banner-01 (1).jpg">
						</div>
						<div class="box-text">
							<h1>FEEL FREE TO CONTACT US</h1>
						</div>
					</div>
				</div>
			</div>
<style media="screen">
#content .address .box-img-text1{background-color: #EE4036;display: flex; overflow: hidden;width: 100%;}
#content .address .box-img-text2{background-color: #F05A28;display: flex; overflow: hidden;width: 100%;}
#content .address .box-img-text3{background-color: #FAAD1D;display: flex; overflow: hidden;width: 100%;}
#content .address .box-img{flex-grow: 1;padding: 20px 20px 0 20px;color: #fff;}
#content .address .box-img img{width: 20%;}
#content .address .box-img .box-text{padding-top: 15px;padding-bottom: 15px;text-align: center;}
#content .address .box-img .box-text p{padding-right: 30px;padding-left: 30px;}

/*Contact Form*/
#content .form{}
#content .form .group-form{padding-top: 40px;}
#content .form h2{text-align: center;padding-bottom: 10px;}
#content .form .button button{
    width: 140px;
    height: 35px;
    font-size: 14px;
    border: 1px solid #FAAD1D;
    color: #FAAD1D;
    background-color: #ffffff;
    /* border-radius: 20px; */
    margin-top: 10px;
    float: right;
}

#content .form .box-form {display: flex;width: 100%;}
#content .form .box-form .form-inline{width: 90%;margin-left: 4%;}
#content .form .box-form .form-inline .box-input{padding: 10px 0;}
#content .form .box-form .form-inline .box-input input{width: 100%;height: 40px;padding-left: 5px;border: 1px solid #FAAD1D;}
#content .form .box-form .form-inline .box-input textarea{width: 100%;height: 300px;padding-left: 5px;border: 1px solid #FAAD1D;padding-top: 8px;}
#content .form .button{display: flex;width: 100%;justify-content: flex-end;margin-left: -4%;}
</style>
      <!-- address -->
			<div class="address">
				<div class="group-address">
					<div class="box-img-text1" style="">
						<div class="box-img" style="" align="center">
							<img src="<?php echo $BATH_URL;?>assets/images/icon/KhmerAdsZone-Contact-Address-80x80.svg">
							<div class="box-text" style="">
								<p>45Z, 371, Trapeang Chhuk, Teuk Thla,</p>
								<p>Sen Sok, Phnom Penh, Cambodia</p>
							</div>
						</div>
					</div>

					<div class="box-img-text2" style="">
						<div class="box-img" align="center">
							<img src="<?php echo $BATH_URL;?>assets/images/icon/KhmerAdsZone-Contact-Phone80x80.svg">
							<div class="box-text" style="">
								<p>+855 93 855 512 </p>
								<p>+855 78855512 / +855 313333201</p>
							</div>

						</div>
					</div>

					<div class="box-img-text3">
						<div class="box-img" align="center">
							<img src="<?php echo $BATH_URL;?>assets/images/icon/KhmerAdsZone-Contact-Email80x80.svg">
							<div class="box-text">
								<p>gm.adszone@gmail.com</p>
								<p>www.khmeradszone.com</p>
							</div>

						</div>
					</div>
				</div>
			</div>

      <!-- Contact Form -->
			<div class="form">
				<div class="group-form">
					<h2>Contact <span>Form</span></h2>
					<p style="padding: 5px 30px 10px 30px;text-align: center;">Please submit your enquirer message in the contact form below. Our team will be in touch soon and contact you back. Thank You!</p>

					<div class="box-form" style="">
						<form class="form-inline" style="" align="center">
						    <div class="box-input" style="">
						      <input type="Name" class="form-control media-width" id="name" placeholder="Name*" style="">
						    </div>
						</form>
					</div>

					<div class="box-form">
						<form class="form-inline" align="center">
						    <div class="box-input">
						      <input type="email" class="form-control media-width" id="email" placeholder="Email*" >
						    </div>
						</form>
					</div>

					<div class="box-form">
						<form class="form-inline" align="center">
						    <div class="box-input">
						      <input type="Phone" class="form-control media-width" id="Phone" placeholder="Phone*">
						    </div>
						</form>
					</div>

					<div class="box-form">
						<form class="form-inline" align="center">
							<div class="box-input">
								<textarea class="form-control" placeholder="Message*"></textarea>
							</div>
						</form>
					</div>

					<style type="text/css">

					</style>
					<div class="button" style="">
						<button>Submit</button>
					</div>
				</div>
			</div>

    </div>
  </div>
</div>

<?php
	// content contact
  include_once('../footer-mobile.php');
 ?>
