# geckometer

## Describe what you would have done next with more time

CSS animations are not my specialty but with more time I'd find a way to implement a proper gauge with 
a dial that reflected the percentage of the value key from the JSON payload. Also there are sometimes 
that the server replies with "invalid" numbers but I don't know if those are real case scenarios and 
I'd need more detail to know how to handle properly those cases. 

Spend no more than 4 hours of happy fun time turning a payload like this:

```json
{
  "value": 34,
  "min": 0,
  "max": 200,
  "format": "currency",
  "unit": "GBP"
}
```

Into a Gecko-O-Meter (yeah...) like this:

![Geck-O-Meter](https://www.dropbox.com/s/6oels5ih2hud2a6/Screen%20Shot%202015-10-19%20at%2014.48.56.png?dl=1)

Here is an endpoint returning some random values you can integrate with (should you wish):

https://widgister.herokuapp.com/challenge/frontend

or you can get the sample payload (as above) from: 

https://widgister.herokuapp.com/challenge/frontend?fixed=1

## Some pointers

### We're looking for production ready code

So we're hoping you'll take a test driven approach. 

### We're not giving you a design

So you can show some creative flair, or not, thats ok; we're looking for all sorts.

### Describe what you would have done next with more time

This is as interesting to us as the code you've actually written. What are the limitations of 
what you've done? Where would you improve? 

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
