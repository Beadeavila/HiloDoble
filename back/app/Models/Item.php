<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;


    static $rules = [
        'itemName' => 'required',
        'category' => 'required',
        'description' => 'required',
        'image' => 'required',
        'stockQuantity' => 'required',
        'purchaseQuantity' => 'required',
        'price' => 'required',
    ];


    protected $fillable = [
        'itemName',
        'category',
        'description',
        'image',
        'stockQuantity',
        'purchaseQuantity',
        'price',
    ];



}