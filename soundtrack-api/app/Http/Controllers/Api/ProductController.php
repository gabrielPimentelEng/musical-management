<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;


class ProductController extends Controller
{
    public function index()
    {
        $products = Product::get();
        if($products->count()>0 )
        {
            return ProductResource::collection($products);
        }
        else
        {
            return response()->json(['message' => 'No record available'], 200);
        }
    }
    public function store(Request $request)
    {   

        $validator = Validator::make($request->all(),[
                            'name'=>'required|string|max:255',
                            'description'=>'required',
                            'price'=> 'required|integer',

                        ]);
        
        if($validator->fails())
        {
            return response()->json([
                'message' => 'All fields are Mandatory',
                'error' => $validator->messages(),
            ],422);
        }

        $product = Product::create([
            'name'=> $request->name,
            'description'=> $request->description,
            'price'=> $request->price,
        ]);

        return response()->json([
            'message'=>'Product Created Successfully',
            'data'=> new ProductResource($product)
        ],200);
    }
    public function show()
    {

    }
    public function update()
    {

    }
}
