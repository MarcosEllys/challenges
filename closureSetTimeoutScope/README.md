# Closure Set Timeout Scope


## Interview question:: what will the following code output?

### Fix this code

```javascript
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
 setTimeout(function() {
  console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
```

### Solution

```javascript
const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
 setTimeout(function() {
  console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
```

## Explanation

The reason for this is because the setTimeout function creates a function (the closure) that has access to its outer
scope, which is the loop that contains the index i. After 3 seconds go by, the function is executed and it
prints out the value of i, which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 and the
loop finally stops at 4. arr[4] does not exist, which is why you get undefined.