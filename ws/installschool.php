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

	$format = strtolower($_GET['format']) == 'json' ? 'json' : 'xml';

	$result = '';
	$link = NULL;
	$db = MySqlDb::getInstance();
	try	{
		$link =	$db->connect('localhost', 'root', 'ramesha', 'mydb');
	} catch(Exception $e)	{
		$result = $e->getMessage();
	}
	$query = "INSERT INTO school(school_name, school_addr, school_lat, school_lng, school_city, school_state, school_type, school_ann_fees, school_phone, school_email, school_overview, school_imgs_path, school_doa) VALUES ('$school_name','$school_addrlane1 . $school_addrlane2', 10.000, 10.000, '$school_city', '$school_state', '$school_type', '$school_ann_fees', '$school_phone', '$school_email', '$school_overview', 'file', CURRENT_TIMESTAMP);";
	$db->insert($query);
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
