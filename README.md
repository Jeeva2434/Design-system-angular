# Design-system-angular


Button Component:

| Input               | Type                  | Description                         |                      |                      |
| ------------------- | --------------------- | ----------------------------------- | -------------------- | -------------------- |
| `label`             | `string`              | Button text                         |                      |                      |
| `variant`           | \`'text'              | 'container'                         | 'outline'\`          | Visual style variant |
| `disabled`          | `boolean`             | Disables the button                 |                      |                      |
| `icon`              | `string` (URL/Base64) | Path or base64 for the icon         |                      |                      |
| `iconPosition`      | \`'left'              | 'right'\`                           | Position of the icon |                      |
| `color`             | `string`              | Text color (CSS value)              |                      |                      |
| `bgColor`           | `string`              | Background color (CSS value)        |                      |                      |
| `borderStyles`      | `string`              | Custom border styles (CSS)          |                      |                      |
| `size`              | \`'sm'                | 'md'                                | 'lg'\`               | Predefined sizes     |
| `fullWidth`         | `boolean`             | Makes button 100% width             |                      |                      |
| `iconsOnly`         | `boolean`             | Renders only the icon without label |                      |                      |
| `loading`           | `boolean`             | Shows a spinner                     |                      |                      |
| `loadingLabel`      | `string`              | Label shown during loading          |                      |                      |
| `loaderBorderClass` | `string`              | Spinner border customization        |                      |                      |
| `tabindex`          | `number`              | Sets the tab order                  |                      |                      |

🧩 UI Kit Jeevan – Angular Component Library
Welcome to the official documentation for using the ui-kit-jeevan component library in your Angular projects.

📦 NPM: ui-kit-jeevan
📖 Storybook Demo: Storybook Live

📦 Installation
To install the UI library in your Angular project, run:

npm install ui-kit-jeevan

🔌 Module Import
In your component or a feature module where you want to use the components:

import { Component, signal } from '@angular/core';
import { Button } from "ui-kit-jeevan";

@Component({
  selector: 'app-root',
  imports: [Button],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('design-app');

  handleUpload(event: string) {
    console.log("handle upload..", event);
  }
}


✅ Basic Button
<lib-button variant="text" label="Click Me"></lib-button>

✅ Button with Icon
<lib-button
  variant="container"
  label="Upload"
  icon="assets/upload.svg"
  iconPosition="right"
  color="white"
  bgColor="green"
  borderStyles="1px solid green"
  size="md"
></lib-button>

✅ Button with Loading Spinner
<lib-button
  variant="container"
  [loading]="true"
  loadingLabel="Loading..."
  loaderBorderClass="2px solid white"
></lib-button>

✅ Handle Click Event
<lib-button
  label="Submit"
  (btnClicked)="onSubmit()"
></lib-button>


✅ Summary
Install from npmjs.com
Use in any Angular app by importing standalone components
View live examples via Storybook
