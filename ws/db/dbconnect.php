<?php
class MySqlDb
{
	public $link;
	private $connStr;
	private static $instance;

	const MYSQL_DATE_FORMAT = 'Y-m-d';
	const MYSQL_TIME_FORMAT = 'H:i:s';
	const MYSQL_DATETIME_FORMAT = 'Y-m-d H:i:s';

	const INSERT_GET_AUTO_INCREMENT_ID = 1;
	const INSERT_GET_AFFECTED_ROWS = 2;

	private function __construct()	{}

	public function connect($host, $user, $password, $database=false, $persistant=false)
	{
		if($persistant) {
			$this->link = @mysql_pconnect($host, $user, $password);
		} else {
			$this->link = @mysql_connect($host, $user, $password);
		}

		if(!$this->link)
		{
			throw new Exception('Unable to connect database' . mysql_error());
		}
		if($database)	$this->useDatabase($database);

		$version = mysql_get_server_info();
		$this->conn_str = "'$databse' on '$user@$host' (MySQL $version)";

		return $this->link;
	}

	public function delete($query)
	{
		return $this->updateOrDelete($query);
	}

	public function getConnectionString()
	{
		return $this->conn_str;
	}

	public static function getInstance()
	{
		if(!isset(self::$instance))
		{
			self::$instance = new MySqlDb();
		}
		return self::$instance;
	}

	public function fetchOneFromEachRow($query)
	{
		$rval = array();
		foreach($this->iterate($query, MySqlResultSet::DATA_NUMERIC_ARRAY) as $row) {
			$rval[] = $row[0];
		}
		return $rval;
	}

	public function fetchOneRow($query, $data_type=MySqlResultSet::DATA_OBJECT)
	{
		$result = new MySqlResultSet($query, $data_type, $this->link);
		$result->rewind();
		$row = $result->current();
		return $row;
	}

	public function fetchOne($query)
	{
		$result = new MySqlResultSet($query, MySqlResultSet::DATA_NUMERIC_ARRAY, $this->link);
		$result->rewind();
		$row = $result->current();
	
		if(!$row)	return false;
		else 	return $row[0];
	}

	public function isConnected()
	{
		if(!empty($this->link)) {
			return @mysql_ping($this->link);
		} else {
			return false;
		}
	}

	public function insert($query, $r_type=MySqlDb::INSERT_GET_AUTO_INCREMENT_ID)
	{
		$r = $this->query($query);
		if($r_type == MySqlDb::INSERT_GET_AFFECTED_ROWS) {
			return @mysql_affected_rows($this->link);
		} else {
			return @mysql_insert_id($this->link);
		}
	}

	public function query($query)
	{
		$r = @mysql_query($query, $this->link);
		if(!$r)
		{
			throw new Exception("Query Error" . mysql_error($this->link));
		}
		return $r;
	}
	
	public function update($query)
	{
		return $this->updateOrDelete($query);
	}

	public function updateOrDelete($query)
	{
		$r = $this->query($query);
		return @mysql_affected_rows($this->link);
	}

	public function useDatabase($database)
	{
		if(!@mysql_select_db($database, $this->link))
		{
			throw new Exception('Unable to select database' . mysql_error($this->link));
		}
	}
}

?>
