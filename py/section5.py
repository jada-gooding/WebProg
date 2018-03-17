first_names = ['Tevin', 'Jimmel', 'Matthew', 'John', 'Jane']
last_names = ['Achong', 'Greer', 'Forbes', 'Doe', 'Johnson']

def merge(el1, el2):
    return el1 + ' ' + el2

def mergeHandler(arr1, arr2, func):
    return list(map(lambda x, y : func(x, y), arr1, arr2))

def merge2Single(arr1, arr2):
    return mergeHandler(arr1, arr2, merge)

def merge2Object(arr1, arr2):
    names = mergeHandler(arr1, arr2, merge)
    ##--- To be Continued...---##

print(merge2Object(first_names, last_names))
