# Asmeev Daniil

## My contact info
* **phone-number** 8-999-999-99-9
* **Telegram** [@godpfm](t.me/godpfm)
* **e-mail** asmeev.daniil@yandex.ru
## My GitHub account
[GitHub](https://github.com/GodPFM)

## Code example:

```
function revrot(str, sz) {
    let massive = [];
    let start = 0;
    let end = sz;
    let strToAdd = '';
    let result = '';
    let number = 0;
    if (sz <= 0 || str == "" || str.length < sz) {
      return '';
    } 
    for (let i = 0; i < str.length; i += sz) {
      strToAdd = str.slice(start, end);
      if (strToAdd.length < sz ) {
        break;
      }
      massive.push(str.slice(start, end));
      start += sz;
      end += sz;
    }
    for (let i = 0; i < massive.length; i++) {
      for (let j = 0; j < massive[i].length; j++) {
        number = number + Math.pow(massive[i][j], 3);
        console.log(number);
      }
      if (number % 2 === 0) {
        massive[i] = massive[i].split('').reverse().join('');
      } else {
        massive[i] = massive[i].split('');
        massive[i].push(massive[i][0]);
        massive[i].shift();
        massive [i] = massive[i].join('');
      }
      number = 0;
      result = result + massive[i];
    }
  return result;
}
```
## Education

1. Ural Federal University, Automation of Technological and Production Processes.
2. Courses: 
    1. HTML academy (basic HTML, css, js)
    2. RS-School(soon)

## Languages: 

* Russian
* English - A2