from section5 import *

var1 = ['Bat', 'Wonder', 'Iron', 'Bruce', 'Super']; 
var2 = ['man', 'Woman', 'Man', 'Banner', 'Man'];

def test_mergeHandler():
    return mergeHandler(var1, var2, merge)
print (test_mergeHandler())


def test_merge2Single():
    return merge2Single(var1, var2)
print (test_merge2Single())

'''
def test_merge2Ogject():
     return merger2Object(var1, var2)
print (test_merge2Object())
'''