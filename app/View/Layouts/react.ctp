<!DOCTYPE html>
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>
		<?php echo $this->fetch('title'); ?>
	</title>
	<?php echo $this->Html->meta('icon'); ?>
	<script>
		let baseurl = <?php echo json_encode(Router::url('/', true)) ; ?>;
		window.baseurl = baseurl;
	</script>
	<!-- <?= vite('main.jsx') ?> -->
	<?= vite('main.tsx') ?>
</head>
<body class="fixed-navbar fixed-sidebar">
	<div id="root" style="padding:0px;"></div>
</body>
</html>
