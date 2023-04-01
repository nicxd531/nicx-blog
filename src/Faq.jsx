import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    // basic Accordion import from bootstrap and edited content 
    return ( 
        <section className="text-center faq" >
            <h2>FAQ</h2>
            <div className="col container-sm">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is strapi</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            Strapi is an open-source headless Content Management System (CMS) that provides a customizable backend for managing content, including text, images, and other media, for web and mobile applications. It is designed to be developer-friendly and can be used with a variety of frontend frameworks, such as React, Angular, and Vue.

                            Strapi is built on top of Node.js and uses MongoDB or other databases as a data store. It provides an intuitive administration interface for creating content types, managing content, and defining relationships between different content types. Strapi also includes a powerful API that can be used to fetch content from the backend and integrate it into a frontend application.

                            One of the benefits of using Strapi is that it provides a lot of flexibility in how content is structured and managed. It also supports plugins and extensions, which can be used to add functionality to the backend, such as authentication, media management, and search.

                            Overall, Strapi is a versatile tool that can be used to build a wide range of web and mobile applications that require a customizable and flexible backend for managing content.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>what is React</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.

                            React is a declarative, component-based library that allows developers to create reusable UI components and manage the state of an application in a simple and efficient way. React uses a Virtual DOM (Document Object Model) to update the user interface efficiently and minimize the number of DOM manipulations required.

                            One of the key features of React is its ability to use JSX, a syntax extension to JavaScript that allows developers to write HTML-like code within their JavaScript files. JSX allows developers to write more concise and expressive code, making it easier to reason about and maintain.

                            React can be used to build a variety of applications, including single-page applications (SPAs), mobile apps, and desktop applications. React can be used with other libraries and frameworks, such as Redux for state management and React Router for routing.

                            React has a large and active community, with many resources available for learning and developing with React. It is widely used in industry, with many companies and organizations using React to build their web applications.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>what is Bootstrap</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            Bootstrap is a popular open-source front-end web development framework that helps developers to create responsive, mobile-first web applications quickly and easily. It was created by Twitter and is now maintained by a community of developers and contributors.

                            Bootstrap provides a set of pre-built UI components and CSS styles that can be used to create responsive and mobile-friendly web pages. These components include things like navigation bars, dropdown menus, forms, buttons, modals, and much more.

                            Bootstrap uses a grid system for layout, which allows developers to create responsive designs that adjust to different screen sizes and devices. This grid system is based on a 12-column layout and can be customized to meet the needs of the specific application.

                            Bootstrap is also customizable, allowing developers to modify the CSS and JavaScript files to meet their specific requirements. Additionally, Bootstrap has a large ecosystem of third-party plugins and extensions that can be used to add additional functionality to the framework.

                            Bootstrap is widely used in industry and has a large and active community of developers, making it a reliable and well-documented tool for front-end web development.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>what is scss</Accordion.Header>
                        <Accordion.Body className='text-start'>
                            SCSS (Sassy CSS) is a CSS preprocessor that adds additional functionality and features to traditional CSS. SCSS is a superset of CSS, which means that any valid CSS code is also valid SCSS code.

                            SCSS allows developers to write more efficient and maintainable CSS code by providing features such as variables, nesting, functions, and mixins. With variables, developers can store values like colors, font sizes, and spacing in one place and reuse them throughout the codebase. Nesting allows developers to write cleaner and more organized CSS code by nesting child elements within parent elements. Functions and mixins provide a way to encapsulate reusable CSS styles and apply them to different elements.

                            SCSS is compiled into traditional CSS code using a compiler, which can be done locally on a developer's machine or on a server. The compiled CSS code can then be included in a web application or webpage like any other CSS file.

                            SCSS is widely used in industry and has a large and active community of developers. Many popular CSS frameworks, such as Bootstrap and Foundation, use SCSS as their preprocessor of choice.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>
     );
}
 
export default Faq;