---
name: Chula ML Project
thumbnail: /project/chula/thumbnail.JPG
summary: At Chulalongkorn University, I worked on a building a machine learning model to help classify the chemical makeup of sweat samples. The objective of the project was to create a less intrusive method of quickly identifying the stage in a menstrual cycle a patient is at.
pictures: /project/chula/
---

# Project Objective

The research project's objective was to identify the chemical
make up of sweat samples using Gas Chromatography - Ion Mobility
Spectrometry (GC-IMS). This info was then to be used to find
any patterns that could indicate the stages in a menstrual cycle
the subject is at. This is so that there could be a less intrusive
method of identification when it is needed.

# Why Machine Learning?

My purpose on the project was to use build a machine learning model
that will be used to classify the data. By doing this, the process
of identifying patterns can be done more efficiently and the knowledge
can be applied more easily as it would not rely on needing a human that
can recognize the patterns. By using machine learning, new patterns in the
results could potentially be discovered to make the process more streamlined.

# Input

Typically when using GC-IMS, the data is plotted onto a heat map
in order to make the numbers more comprehensible to the human mind.
In this scenerio, the data was given as the raw numbers. This
is because the computer can handle the data and we suspect it could even perform
better using the raw data as input, rather than an image plot of the data.
However, we also wanted to try using the images as input as it could
simplify the data and make patterns more recognizable to the model. 
In the end we tried to use both.

# Data Processing

When using the raw data, it is a 2D array of floating point numbers
this can be utilise easily as it can be treated similarly to a 1D image
so a convolutional neural network (CNN) can be used.

Similarly, the images were 3D arrays so a 2D CNN can be used.
we tried to simplify the data for both models by passing the a average pooling
and max pooling for numerical and image data respectively.

# Model Building

When building the model, the library TensorFlow was used, along side
pandas to format the data. The first model used to process numerical data
had 2 average pooling layers and 4 dense layers with relu activation.
between the first 3 dense layers there were a dropout layer. The model used
RMSprop optimizer with a learning rate of 0.0001 with binary cross entropy
as the loss function. The second model had two sets of 3 convolutional2d layers
followed by a max pooling layer. Then, the data was flattened and passed
through 2 dense layers. The same optimizer and loss functions were used.

# Performance and conclusion

In the end, the model did not perform to the expected accuracy
, correctly classiflying only 60% of the given data for both
numerical and image datasets. The lack of training data available
as the samples were all manually gathered as well as the short deadline
resulted in our portion of the research to be scrapped from the final paper
that was submitted. This project may not be the most successful I have
completed but it did teach me how to work in the lab environment as well
as how to properly write a research paper and to properly cite my sources.