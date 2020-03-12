Here ViewChild() is used to acces the DOMElement.
ViewChild('variable used in DOM', {static: true}); the static value is true so that the variable can be accessed in the life cycle hooks
So, the value of the DOM element is not present as itsn't rendered yet and can be seen AfterViewInit().
So if value accessed before rendering isn't present.
