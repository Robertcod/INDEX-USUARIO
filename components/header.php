<?php
namespace App\View\Components;

use Illuminate\View\Component;

class Header extends Component
{
    public $tipo;

    public function __construct($tipo = "usuario")
    {
        $this->tipo = $tipo;
    }

    public function render()
    {
        return view('components.header');
    }
}
