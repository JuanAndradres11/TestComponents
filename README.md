# **README.md**

```markdown
# My Components Library

A small React component library with three reusable components:  
- `ButtonComponent`  
- `InputFieldComponent`  
- `DataTableComponent`  

This project includes a Storybook setup for interactive previews and documentation.

---

## **Folder Structure**

```



````

---

## **Installation / Setup**

1. Clone the repo:
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
````

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run Storybook locally:

```bash
npm run storybook
# or
yarn storybook
```

4. Build static Storybook for deployment:

```bash
npm run build-storybook
# or
yarn build-storybook
```

---

## **Usage / Demo**

### Button

```tsx
<ButtonComponent label="Click Me" onClick={() => alert('Clicked!')} />
```

### Input Field

```tsx
<InputFieldComponent
  placeholder="Enter text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### DataTable

```tsx
<DataTableComponent
  columns={['id', 'name', 'age']}
  data={[
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
  ]}
  selectable={true}
/>
```

---

## **Storybook Preview**

[View Live Storybook](https://<your-vercel-url>.vercel.app)

> All interactive states are included: hover, click, row selection, and input validation.

---

## **Screenshots / GIFs (Optional)**

You can add screenshots or GIFs here to showcase interactive states. Example:

![Button Component](./assets/button-demo.png)
![DataTable Component](./assets/datatable-demo.gif)

> Place your images inside an `assets/` folder at the project root and reference them like above.

---

## **Approach / Notes**

* Components are designed to be **reusable and customizable** via props.
* Storybook is used for **interactive documentation and demo purposes**.
* `DataTableComponent` supports selectable rows and dynamic data.
* `InputFieldComponent` supports validation and error messages.

---

## **Contributing**

* Fork the repo and create a branch for your features/fixes.
* Submit a pull request with clear description.

---

## **License**

MIT License

````

---

### ✅ **Where to add screenshots / GIFs**
- Create a folder in your project root called `assets/`.
- Add your images/GIFs there.  
- Reference them in README like:  
```markdown
![Description](./assets/image-name.png)
````


If you want, I can also **draft some small example GIF captions and layout** that would make your README look extra polished for submission. Do you want me to do that?
