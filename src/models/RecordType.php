<?php namespace EternalSword\LPress;

class RecordType extends \Eloquent {

	/**
		* The database table used by the model.
		*
		* @var string
		*/
	protected $table = 'record_types';

	/**
		* The attributes excluded from the model's JSON form.
		*
		* @var array
		*/
	protected $hidden = array();

	public function records() {
		return $this->hasMany('Record');
	}

	public function fields() {
		return $this->hasMany('Field');
	}
}
