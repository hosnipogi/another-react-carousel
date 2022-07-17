# Just Another React Carousel Package

Just another basic barebones React Carousel package

### Installing as a package

`yarn add @hotelkilow/another-react-carousel`

### Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '@hotelkilow/another-react-carousel';

const images = ['/images/1.jpeg', '/images/2.jpeg', '/images/3.jpeg']

const App = () => <div>
    <Carousel images={images}>
        <div>
            <p>hello</p>
        </div>
    </Carousel>
</div>

ReactDOM.render(<App />, document.querySelector('#root'));
```

### Props

| Name                                     | Value                                       | Description                                                                                  |
| ---------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------- |
| images           | `string[]`                                  | An array of strings for each of the images path                                              |
| duration         | `number`                                    | Interval in milliseconds on how long until next image appears. Optional. Defaults to `4000`. |
| overlay          | `boolean`                                   | Adds overlay on the Carousel Wrapper. Optional. Defaults to `true`                           |
| pauseOnHover     | `boolean`                                   | Wether to pause Carousel on mouse hover. Optional.                                           |
| wrapperProps     | `React.HTMLAttributes<HTMLDivElement>`      | Props to attach to the Wrapper. Optional.                                                    |
| imageProps       | `React.ImgHTMLAttributes<HTMLImageElement>` | Props to attach to the img Component. Optional.                                              |
