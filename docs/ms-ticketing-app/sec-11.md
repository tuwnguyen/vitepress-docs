---
outline: deep
next:
  text: ''
  link: ''
---

# Section 11: Integrating a Server-Side-Rendered React App

## Reminder on Server-Side-Rendering
 - Pros and Cons

## Nextjs
 - Behind the scenes when Next render initial
 ![alt text](./img/image-12.png)

## Error Confused URL when call axios inside server-side
 - [Link doc](https://app.diagrams.net/#G1HaewXCw605JcuUvepBM96KyaO5tD7Kby#%7B%22pageId%22%3A%22eBulHmyMRUKZekjZkh-w%22%7D)
 ```javascript
    const Landing = ({ currentUser }) => {
      console.log(currentUser);
      axios.get("/api/users/currentuser");
      return <h1>Landing page</h1>;
    };

    // Landing.getInitialProps = async () => {
    //   const response = await axios.get("/api/users/currentuser");
    //   return response.data;
    // };
 ```
![making request from Browser](./img/image-13.png)
![making request from server-side](./img/image-14.png)

 - Solutions:
 ![solutions](./img/image-15.png)
 ![access service in namespace](./img/image-16.png)

 - Namespaces in K8S
 ```bash
 kubectl get namespace
 ```

 ![cross namespace](./img/image-17.png)
 ![create extranal service](./img/image-18.png)

## When is GetInitialProps is called
![alt text](./img/image-19.png)
![alt text](./img/image-20.png)

## Specify the Host in server
<pre>http://SERVICENAME.NAMESPACE.svc.cluster.local</pre>

## Issues with Custom App GetInitialProps

![alt text](./img/image-23.png)
![alt text](./img/image-22.png)