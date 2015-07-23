<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

include_once('./db/dbconnect.php');

	$school_name = $_GET['inpSchoolName'];
	$school_type = $_GET['inpSchoolType'];
	$school_addrlane1 = $_GET['inpaddrlane1'];
	$school_addrlane2 = $_GET['inpaddrlane2'];
	$school_city	= $_GET['inpcity'];
	$school_state = $_GET['inpstate'];
	$school_phone = $_GET['inpphone'];
	$school_email = $_GET['inpEmail'];
	$school_overview = $_GET['inpoverview'];
	$school_ann_fees = $_GET['inpAnualFee'];

	$format = 'xml';	//strtolower($_GET['format']) == 'json' ? 'json' : 'xml';

	$db = MySqlDb::getInstance();
	print 'Start to connect'; 
	try	{
		$db->connect('107.108.188.41', 'root', 'ramesha');
	} catch(Exception $e)	{
		print $e->getMessage();
	}

	if($format == 'json') {
		header('Content-type: application/json');
		echo json_encode('Everything is fine..');
	} else {
		header('Content-type: application/xml');
		echo '<result>';
		echo '<value>';
		echo 'Data inserted successfully.';
		echo '</value>';
		echo '</result>';
	}
?>
