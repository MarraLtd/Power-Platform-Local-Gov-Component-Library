# Form Actions

## Description

In order to create usable forms, the components need to be able to integrate with standard Canvas App controls so that standard form actions can be executed. 

The components can be hooked up to Canvas App controls via exposed custom input properties. We will focus on the **submit** and **reset** actions of our components.

The behaviour and instructions described here are the same for all of the components.

## Submit

### Description

Every component has a boolean input **Submit enabled** which dictates whether the component uses live validation (boolean=false) or on submit validation (boolean=true). 

Live validation means the validation occurs as soon as the input loses focus. This means the errors show as soon as the **HasError** output boolean switches from false to true. For an error to show for empty field validation, a value must be entered and then removed. This prevents errors showing as soon as fields are clicked into. 

Submit validation means errors show on selection of a button or any other external trigger which can drive a boolean value. The **HasError** output property will switch to true as soon as an error is entered and input loses focus (same as live validation behaviour). However, the component error will not show to the user until the **Submit** input boolean has changed its value. The **Submit** boolean allows the errors to be triggered by an external control and every time **Submit** changes it will display the results of the validation on the component.

###  Set Up

Below are instructions on how to link a button up so it submits a component:

1. Add a library component to a canvas app. Submit is enabled by default.

2. Add a button to the app.

3. On the **OnSelect** property of the button, enter the following code:

```
UpdateContext({SubmitVar: !SubmitVar});
```

Where `SubmitVar` is a generic boolean submission variable.

4. On the **Submit** property of the component, enter `SubmitVar`.

5. Save and refresh the application.

6. In play mode, clicking the button will show the result of the component validation.

### Tips

- It is important to save and refresh after hooking up components in order to avoid validation failures stemming from submission variables having incorrect initial value. The variable must be false initially.

- Any control that can update a variable value on an action can submit a component.

- Multiple components can be submitted simultaneously by adding the same submission variable to the **Submit** property of all components.

- Other actions can be performed based on the outcome of the submission. For example navigating to another page of the form if there are no errors using the **HasError** property of the component. For example, for a component `ComponentName` we  could have the following code in the **OnSelect** property:

```
UpdateContext({subVar: !subVar});
If(!ComponentName.HasError, Set(ShouldNavigate,true));
```

And in an invisible timer control's **OnTimerEnd** property enter:

```
Set(ShouldNavigate,false);
Navigate(Screen2);
```

Where the timer has a **Duration** value of 0.

**Note:** Our components' internal validation works using timers so errors are shown and cleared based on completion of timer controls. For this reason **we recommend using timers for navigation** to ensure all errors are shown or cleared before navigation, as above.

## Reset

### Description

Our components have the ability to be reset by other Power Apps controls such as a button. Any control that can call the Power FX **Reset** function in a property can reset a component.

From a user perspective, resetting the component will reset the field input(s) and the component errors. All input and output properties are also reset to their default values, these can be found in the component specific docs in the `./components` folder.

### Set Up

Below are instructions on how to link a button up so it resets a component:

1. Add a library component to a canvas app, say it is called `ComponentName`.

2. Add a button to the app.

3. In the **OnSelect** property of the button enter the code `Reset(ComponentName)`.

4. In play mode, clicking the button will reset the component.

### Tips

- Multiple components can be reset by a single button.




