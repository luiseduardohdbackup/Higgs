function test()
{
    var o = { x: 5 };

    var s;

    for (var i = 0; $ir_lt_i32(i, 200000000); i = $ir_add_i32(i, 1))
    {
        s = o.x;
    }

    return s;
}

//print(test.irString());

test();
