export function runFetch(input: any, options: any): any {
  return fetch(input, options).then((res: Response) => {
    if (res.ok === true) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  });
}
