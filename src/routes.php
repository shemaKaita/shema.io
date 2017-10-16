<?php

class flickerEventsHooks
{
    private $actions = [];
    private $filters = [];
    protected static $instance;
    public function __construct()
    {
        if (!isset($this::$instance)) {
            $this::$instance = $this;
        }
    }
    public function add($args = [], $type = '')
    {
        switch ($type) {
            case 'action':
                $this::$instance->actions[] = $args;
                break;
            case 'filter':
                $this::$instance->filters[] = $args;
                break;
        }
    }
    public function registerHooks()
    {
        foreach ($this::$instance->actions as $key => $action) {
            $action->run();
        }
    }

}

class flickerAction
{
    public $name = '';
    public function __construct($name)
    {
        $flicker    = new flickerEventsHooks();
        $this->name = $name;
        $flicker->add($this, 'action');
    }
    public function run()
    {
        return;
    }

}

class register extends flickerAction
{
    public function __construct($name)
    {
        parent::__construct($name);
    }
    public function run()
    {
        echo $this->name . ' is running...';
    }
}

new register('register-one');

new register('register-two');

$flicker = new flickerEventsHooks();

$flicker->registerHooks();

$app->get('/[{name}]', function ($request, $response, $args) {

    return $this->renderer->render($response, 'index.phtml', $args);

});
