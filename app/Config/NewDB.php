<?php

use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;

$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => 'localhost',
    'database'  => 'oto_db',
    'username'  => 'root',
    'password'  => 'luqman1234',
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
], 'default');

$capsule->addConnection([
  'driver'    => 'pgsql',
  'host' 		=> '10.23.205.182',
  'port' 		=> '5432',
  'database'  => 'crisp_data',
  'username'  => 'root',
  'password'  => 'U53r_4cc0un7',
  'charset' => 'utf8',
  'prefix' => '',
  'prefix_indexes' => true,
  'schema' => 'public',
  'sslmode' => 'prefer',
], 'pgsqldev');

$capsule->setAsGlobal();
$capsule->bootEloquent();