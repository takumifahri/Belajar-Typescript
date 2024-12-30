// describe("Hello", function(){
//     it("should say Hello", function(){
//         const nama = "Hello Fahri"
//         expect(nama).toBe("Hello Fahri")
//     })
// })

import { Name } from "../src/say-hello";

describe('Name', function() : void{
    it('should say Hello', function() : void{
        const name = "Fahri";
        expect(Name(name)).toBe("Hello Fahri");
    })
})