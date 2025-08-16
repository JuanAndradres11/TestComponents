

```markdown
# My Components Library

A small React component library with three reusable components:  
- `Button`  
- `InputField`  
- `DataTable`  

Includes a Storybook setup for interactive previews and documentation.

---

## 📁 Folder Structure

my-components/
├─ src/
│  └─ components/
│     ├─ Button/
│     │  ├─ Button.tsx
│     │  ├─ Button.stories.tsx
│     │  └─ __tests__/
│     │     └─ Button.test.tsx
│     │
│     ├─ InputField/
│     │  ├─ InputField.tsx
│     │  ├─ InputField.stories.tsx
│     │  └─ __tests__/
│     │     └─ InputField.test.tsx
│     │
│     └─ DataTable/
│        ├─ DataTable.tsx
│        ├─ DataTable.stories.tsx
│        └─ __tests__/
│           └─ DataTable.test.tsx
│
├─ .storybook/
├─ package.json
├─ README.md
└─ yarn.lock

````

> Each component has its own folder with the component code, Storybook stories, and optional tests.

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

[View Live Storybook][(https://test-components-z7y1.vercel.app/)]

> All interactive states are included: hover, click, row selection, and input validation.

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

If you want, I can also **suggest example captions and layout for GIFs/screenshots** so your README looks visually polished for submission. Do you want me to do that?
```
