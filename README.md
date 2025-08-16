```markdown
# My Components Library

A small React component library with three reusable components:  
- `Button`  
- `InputField`  
- `DataTable`  

This project includes a Storybook setup for interactive previews and documentation.

---

## 📁 Folder Structure

```

my-components/
├─ src/
│  ├─ components/                   # Reusable UI components
│  │  ├─ Button/                    # Button folder
│  │  │  ├─ Button.tsx
│  │  │  ├─ Button.stories.tsx
│  │  │  └─ **tests**/
│  │  │      └─ Button.test.tsx
│  │  │
│  │  ├─ InputField/                # InputField folder
│  │  │  ├─ InputField.tsx
│  │  │  ├─ InputField.stories.tsx
│  │  │  └─ **tests**/
│  │  │      └─ InputField.test.tsx
│  │  │
│  │  └─ DataTable/                 # DataTable folder
│  │      ├─ DataTable.tsx
│  │      ├─ DataTable.stories.tsx
│  │      └─ **tests**/
│  │          └─ DataTable.test.tsx
│
├─ .storybook/                      # Storybook config
├─ package.json
├─ README.md
└─ yarn.lock / package-lock.json

````

---

## ⚡ Installation / Setup

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

## 🎨 Usage / Demo

### Button

```tsx
<Button
  label="Click Me"
  onClick={() => alert('Clicked!')}
/>
```

### Input Field

```tsx
<InputField
  placeholder="Enter text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### DataTable

```tsx
<DataTable
  columns={['id', 'name', 'age']}
  data={[
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
  ]}
  selectable={true}
/>
```

---

## 🌐 Storybook Preview

[View Live Storybook](https://<your-vercel-url>.vercel.app)

> All interactive states are included: hover, click, row selection, and input validation.

---

## 🖼 Screenshots / GIFs (Optional)

You can add screenshots or GIFs here to showcase interactive states. Example:

![Button Demo](./assets/button-demo.png)
![DataTable Demo](./assets/datatable-demo.gif)

> Place your images inside an `assets/` folder at the project root and reference them like above.

---

## 📝 Approach / Notes

* Components are designed to be **reusable and customizable** via props.
* Storybook is used for **interactive documentation and demo purposes**.
* `DataTable` supports selectable rows and dynamic data.
* `InputField` supports validation and error messages.

---

## 🤝 Contributing

* Fork the repo and create a branch for your features/fixes.
* Submit a pull request with clear description.

---

## ⚖ License

MIT License

```
