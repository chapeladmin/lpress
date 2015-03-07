<?php namespace EternalSword\Controllers;

use Illuminate\Routing\Controllers\Controller;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\HTML;
use Illuminate\Support\Facades\View;
use EternalSword\Models\BaseModel;
use EternalSword\Models\Comment;
use EternalSword\Models\Field;
use EternalSword\Models\FieldType;
use EternalSword\Models\Group;
use EternalSword\Models\Permission;
use EternalSword\Models\Record;
use EternalSword\Models\RecordType;
use EternalSword\Models\Revision;
use EternalSword\Models\Site;
use EternalSword\Models\Symlink;
use EternalSword\Models\Theme;
use EternalSword\Models\User;
use EternalSword\Models\Value;
use GrahamCampbell\HTMLMin\Facades\HTMLMin;

class IndexController extends BaseController {
	public function getIndex() {
		extract(parent::prepareMake());	
		return HTMLMin::live(View::make($view_prefix . '.index', 
			array(
				'domain' => DOMAIN,
				'view_prefix' => $view_prefix,
				'title' => $site[0]['label'],
				'route_prefix' => Config::get('lpress::settings.route_prefix')
			)
		));
	}
}
