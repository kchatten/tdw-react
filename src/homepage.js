import React from 'react';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="_base">
                <div id="_page">
                    <div className="_content-block">
                        <h1><u>Preamble</u></h1>
                        <br />
                        <p>
                            Of the nearly 8.3 billion people on the planet, a little over 0.1% of them have been diagnosed with Type 1 Diabetes.
                            In contrast, there are more than 37 million Type 2 Diabetics in the United States alone.
                            If you're reading this — either you or someone you know has likely joined that exclusive 0.1% club.
                            Congratudolences, the good news is that technology and medicine have come a long way and while still an inconvenience, the disease is hardly the death-sentence it once was. I myself officially joined at the start of 2023, and I'm creating this site as a resource to help newly diagnosed individuals navigate their new day-to-day, and to serve as an educational resource to help destigmatize and demistify Type 1 Diabetes.
                            So with that said, in full disclosure:
                        </p>
                        <br />
                        <span>
                            <strong style={{ display: "flex", flexDirection: "column", placeItems: "center", placeContent: "center" }}>
                                <span>I AM NOT A DOCTOR</span>
                                ADVICE FROM THE INTERNET IS EXACTLY THAT!
                                <span style={{ fontSize: "40px" }}>ALWAYS!</span>
                                CONSULT YOUR PRIMARY CARE TEAM BEFORE MAKING ANY SIGNIFICANT CHANGES TO YOUR DIABETES CARE PLAN!
                            </strong>
                        </span>
                        {/* end of a _content-block*/}
                    </div>
                    <div className="_content-block">
                        <h1><u>Introduction</u></h1>
                        <br />
                        <span>
                            <p>
                                So, what exactly is Diabetes, and what's the difference between the types?
                                Diabetes Mellitus at its core is a metabolic disease that affects how your body turns food into energy as a result of an overreactive immune system that targets and destroys the insulin producing beta cells.
                            </p>
                            <br />
                            <ul><u>Type 2 Diabetics</u>:
                                <li>can have reduced insulin production and are resistant to the insulin they do produce</li>
                                <li>can put their disease into remission through dedicated effort and lifestyle changes</li>
                                <li>usually only take bolus insulin, and instead use insulin-resistance reducing medications like Metformin</li>
                            </ul>
                            <br />
                            <ul><u>Type 1 Diabetics</u>:
                                <li>cannot put their disease into remission, and generally speaking must participate in a daily insulin therapy regiment</li>
                                <li>have no insulin production*</li>
                                <li>must take a basal insulin once a day, and bolus insulin with meals</li>
                            </ul>
                            <p>*for the most part, more on that later</p>
                            <br />
                            <p>Let's go ahead and clear up some common misconceptions and confusion surrounding Type 1 Diabetes. </p>
                            <br />
                            <ul><u>Things your Diabetes is</u>:
                                <li>not your fault</li>
                                <li>totally manageable</li>
                                <li>probably not going to kill you</li>
                            </ul>
                            <br />
                            <ul><u>Things you can do with Diabetes</u>:
                                <li>Eat whatever you want</li>
                                <li>With very few exceptions, all of the activities you loved before diagnosis</li>
                            </ul>
                            <br />
                            <ul><u>Things your Diabetes isn't</u>:
                                <li>Curable</li>
                            </ul>
                        </span>
                        {/* end of a _content-block */}
                    </div>
                    <div className="_content-block">
                        <h1><u>What Happened To You?</u></h1>
                        <br />
                        <span>
                            <p>
                                Type 1 Diabetes can happen at any age, but it's most commonly onset between the ages of 10 and 14. It used to be called Juvenile Diabetes for that reason.
                                It basically means either your pancreas has stopped producing beta cells, or it's in the process of losing that ability. The beta cell is what actually makes the insulin our bodies require to convert carbohydrates into energy.
                                Insulin is a horomone that actually opens your cells to glucose, so they can use it as energy. Without insulin, your body begins to panic as the cells cry out for energy.
                                The body however is very resilient, and incredibly crafty. While it may not be able to feed those screaming mouths with carbohydrates, it has evolved an adaptation that you may have actually already heard of before, Ketosis. Which the body enters after a prolonged period without significant carbohydrate or protein* intake.
                                The body can actually produce glucose from some noncarbohydrate sources through a process called Gluconeogenesis. That's right, if you're like me — you might've discovered you had Diabetes when the Keto diet nearly killed you. Not that I was it voluntarily mind you.
                                No you see, Ketosis is actually the process by which the body breaks down muscle and fatty tissues for energy by producing a dietary acid called a Ketone. Astute readers may have noticed that I said a dietary acid And while yes, your body now can continue to function something sinister is now happening inside you.
                                The rate at which your body can produce ketones, the rate at which your body uses ketones and most importantly of all, the rate at which your body can get rid of ketones are all wildly out of sync. Ketones begin to build up in your blood which begins acidifying it, throwing its ph balance out of whack.
                                This is where things begin to fall apart and it can happen very quickly. The parts of the brain that regulate breathing try and compensate by increasing the frequency and depth of your breaths to expell more carbon dioxide and your kidneys try to filter out and excrete the ketones as best they can.
                                These systems however can only do so much before the inevitable and dire consequences begin to arise. The the muscles that make your heart beat become impacted. Your cognitive function becomes impaired. There are many terrible side effects that come with acidosis, including organ failure, coma, and death. So it's important to be aware of some of the more common symptoms of Diabetic Ketoacidosis.
                            </p>
                            <br />
                            <ul><u>Common symptoms of DKA include</u>:
                                <li>Rapid, unexplained weight loss</li>
                                <li>Excessive thirst and urination</li>
                                <li>Uncharacteristic fatigue, confusion or headaches</li>
                                <li>Nausea, vomiting, stomach pains</li>
                            </ul>
                            <br />
                            <p>
                                What do you do if you're experiencing a combination of those symptoms? Go to the Emergency Room because left untreated, Diabetic Ketoacidosis WILL kill you. Now I know that all sounds scary but the good news is that modern medicine is a marvel and nowadays the disease is very managable.
                                With the help of Constant Glucose Monitors and advancements in pump technology and insulin formulas, you can live almost exactly the same life you did before diagnosis.
                                Don't get me wrong, your life has changed forever and it's normal to grieve the life you 'lost' but hopefully by the time you're finished reading you'll at least feel less intimidated by what the future has in store for you.
                                In the next section we're going to go over some of the new gadgets and gizmo's you'll need to get acquainted with.
                            </p>
                        </span>
                        {/* end of a _content-block */}
                    </div>
                    <div className="_content-block">
                        <h1><u>Diabetes Comes With Toys?</u></h1>
                        <br />
                        <span>
                            <p>
                                Well, not really. But as you'll come to find there is a vast array of devices and technologies that a diabetic can utilize to live a more engaging life, or to help ease some of the mental burden that comes with the territory of running a finely tuned organ on manual mode.
                                I'm going to try to go over the most common ones, and the ones that I think are the most important for you to be aware of without overloading you. Insulin As mentioned, insulin.
                                It's important. We don't make it anymore, so we have to introduce it into our body somehow and unfortunately the technology just isn't quite there yet for just about any other delivery method.
                                Subcutaneous injections don't come without risk but they can be largely mitigated. There are two categories of insulin.
                                Basal insulin is your once-a-day-every-day insulin.
                                It's easy to remember that your Basal insulin is your base rate of insulin and it comes in a few different durations. It's important to check the pamphlet or insert that comes with your insulin to determine the onset, peak and duration.
                                Bolus insulin is your rapid acting insulin that you take with meals.
                                This one is much stronger because it's formulated to help us deal with the glucose spikes that come with eating. We'll explore this a bit later on.Insulin Delivery Methods While there is an inhalable insulin, by far the most common delivery method for insulin is subcutaneous injection.
                                For that reason, you might hear a diabetic call themself a pump user or that they're on MDI (multiple daily injections). If you're on MDI you're likely going to be using either a syringe with which you draw insulin from a sterile vial, or you'll have pre-filled pens that sometimes actually come with their own special refills.
                                These fancy pens usually need to have the ability to be refilled rather than disposed of because they do more than just inject you with lifejuice. The most common feature you will find is an injection history, which will help you remember when and how much you last injected. If you're on a pump, (admittedly I am not so I don't have a lot of experience with them) you will basically have a catheter (IV?) that you move around once every few days.
                                That catheter is connected with sterile tubing to a reservoir filled with bolus insulin in the pump.
                                Pumps can be combined with our next category of devices to create what are called 'Closed Loop Systems' where the two devices communicate so that your dosings are automatic.
                                Glucometers There are two types of Glucometers you're likely to run into nowadays. The first are just simply called 'glucometers' and they're what you might be more familiar with and even if you primarily use the second type, you should always have one of these as a back up.
                                They are as cheap or as expensive as you want, but generally speaking they are quite affordable and can be found at most Walmarts or pharmacies in a pinch. Glucometers however are a bit unwieldy, and quite frankly — the worst part about Diabetes for me (aside from, y'know.. the Diabetes.) They require you to draw blood which when you're supposed to do it a minimum of 5 times a day.. I think you can start to see the problem.
                                That blood also has to go somewhere and it doesn't go into the device, no it has to go on small expensive bits of plastic that are immediately discarded. Wasteful, expensive and nowadays unnecessary. As useful as they are to have to serve as a backup, Constant Glucose Meters are the bee's knees.
                                These devices are implanted usually on the back of the arm and a thin filament is inserted under the skin. These devices don't actually measure your blood sugar though. Instead, they measure the sugar content of your interstitial fluids, which is to say the fluid between your cells.
                                It's important to remember because while a glucometer using blood is measuring what your blood sugar is at that very moment, it takes about 15-20 minutes for the glucose in your blood to be distributed to the cells, and thus to be detected in the interstitial fluid. We'll talk more about this later, so don't worry about it too much for now.
                                Just know that if you're currently using one of these devices, the number you see on your reader or phone is NOT what your blood glucose is.
                                Special Mentions There is a lot more to discuss in the above topics like syringe and needle gauge and lengths, cgm brands and overpatches, even different types of insulin but we'll discuss those another time.
                                I wanted to take some time out however to mention a few other things I've personally found very handy. Cheap Kitchen Scale: A cheap unit from you preferred source is sufficient. It's best to get one that can measure down to 0.1 grams for measuring cereal, yogurt, milk, chips, fruit, just about anything you're going to need to measure in the kitchen really.
                                Fanny Pack / Lunch Bag: Especially if you don't have a backpack or a purse, these are great to carry your insulin, low snacks, glucometer and room for whatever else you might want. iPort Advanced: In the way that a CGM reduces finger pricks, the iPort Advanced reduces injections. It's an empty reservoir that you implant into yourself. Then you fill the reservoir instead of taking injections.
                                For this reason, I like to call it a 'lazy pump'. Totally unnecessary for most but if you're needlephobic this can be a lifesaver.
                            </p>
                        </span>
                        {/* end of a _content-block */}
                    </div>
                    <div className="_content-block">
                        <h1><u>Numbers, Numbers & More Numbers</u></h1>
                        <br />
                        <span>
                            <p>
                                I hope you're not too intimidated by numbers, as they are inescapable. But if you can operate a calculator, you can do all the math required to manage your diabetes. Basal Rate Testing Realistically speaking, this is not something you should do without supervision. Your stress levels, your activity levels, the types and amount of food you're eating are just some of the factors that play in to what your basal rate will be. Ideally speaking, your basal rate will hold you at around 6mmol / 108mg.
                                Now you might be thinking to yourself, 'but but but, a nondiabetic averages 4.5mmol/81mg!' yes, dear reader they do. If you were to hold yourself to that level however, you would have a much smaller margin of error. By staying a bit higher but stil within safe ranges we reduce our chance for diabetic complications from both lows and highs. Does that mean it's unachievable for a diabetic? Absolutely not. You could certainly match those numbers. It just requires a lot more upkeep and maintenance and a strong understanding of your disease and your body.
                                A common misconception between the two types of diabetes is that while a Type 2 Diabetic may struggle to keep their sugar levels down a Type 1 Diabetic generally speaking will struggle to keep their sugar levels up. That is usually due in part to having an incorrect basal dosage. If your basal dosage is off all of your other dosages will also be off, so it's important to watch for patterns so that you can make the necessary adjustments.
                                If you are having two or more high or low blood sugar readings a day, you may need to adjust your basal rate. If your basal rate is too high, your insulin-to-carb ratio should be lowered until you can adjust your basal rate. If your basal rate is too low, you will likely need to increase your I:C ratio until you can adjust your basal rate. To perform a basal rate test, you need to have an empty stomach because we don't want to introduce any new glucose sources. We're trying to measure how our body is utilizing glucose, so if we're actively digesting food our data will be skewed.
                                It is recommended to not eat for at least 4-5 hours prior to performing a basal rate test. Additionally, your blood sugar should be between approximately 5.5mmol/100mg and 8mmol/145mmol. This is so that during the testing our blood sugar does not drop too low or rise too high. If your blood sugar goes outside of your acceptable range (generally considered between 4.5mmol/81mg and 10mmol/180mg) during your testing it is important to immediately stop the test and treat appropriately. It is important to remember that though we call this a test, there is no pass/fail.
                                Going out of range during the test does not mean you 'failed', it just means we need to adjust our basal rate. 'but but but, isn't that just failure with extra steps?' You will quickly come to find that if you cannot give yourself grace, you will greatly struggle with this disease. So sure, if you want to view it through that lens yes, you failed. You're an abject failure. Simply because you can't manually do the same thing that our bodies evolved to do over millions and millions of years, controlling the flow of several hormones from several different organs.
                                You need to do a better job of telling your liver to regulate glucagon, your adrenal glands to not dump so much cortisol, and gosh dangit just tell your immune system to get the heck out of your Islet of Langerhans and be cool for once!! Now that isn't exactly fair, is it? I bet you haven't even heard of the Islet of Langerhans before. I know I hadn't. The most common time to perform a basal rate test is overnight, as we generally fast while we sleep anyway. If you don't have a CGM, it is unfortunately important to wake up every 3-4 hours to test your blood glucose. So you've performed the test.. now what?
                                Adjustments should be made incrementally, in 10% intervals (rounding up). What that means, is if you're taking between 1 and 15 units of basal insulin, you should raise or lower your dosage by 1 unit. Between 16 and 25, raise or lower the dosage by 2. So on and so forth. It is recommended to use this new dosage for NO LESS than 3 days before performing another basal rate test. The amount of time required before you can accurately determine your basal rate is entirely based on the specific brand of insulin you use. I use Tresiba which is an ultra-long lasting insulin, and even though you could only wait three days, that's basically how long it takes for a single dosage of Tresiba to stabilize and I take it once a day, so for me to be able to see any change in my patterns I'd ideally wait atleast 5 days of the new dose. It's important to remember that we generally have multiple basal dosages at once. This isn't what is referred to as stacking. This is so that we can maintain more stable levels for longer periods of times. Insulin stacking a basal dosage would be more like taking your dosage in the morning and then again at night.
                                Even if you wanted to change your dosage timings you still would not do this as you would be stacking your doses.
                            </p>
                            <br />
                            <u>In summary</u>:
                            <ul>
                                <li>Don't eat a few hours before bed</li>
                                <li>Destress before bed, but avoid hot showers and exercise</li>
                                <li>Make sure you're at or around the blood glucose value you want to be your base line value</li>
                                <li>If you don't have a CGM, set an alarm for some time between 2 and 4 AM to check what your blood glucose is</li>
                                <li>If at any point you detect that you are out of range, stop the test and treat as you would normally</li>
                                <li>Adjust your dosage by 10% the following day</li>
                                <li>Repeat until you have several nights where you stay within your determined acceptable range</li>
                                <strong><li>Unless otherwise instructed by your care team, you should only be taking one basal shot a day</li></strong>
                            </ul>
                            <br />
                            <p>
                                Now comes the most complex math of it all really.. the
                            </p>
                            <br />
                            <strong><u>Carb per Gram Calculator</u></strong>
                            <p>
                                So lets say you want some fries or chips.
                                The bag says a portion of 50 grams by weight has 28 grams of carbohydrate. You're feeling pretty snack-y and 2 portions at 100 grams by weight is 52 grams of carbohydrate.
                                Your I:C ratio is 1:15 and you really want to figure out exactly how many grams by weight 60 grams of carbohydrate is. So what do you do?
                            </p>
                            <br />
                            <u>In summary</u>:
                            <p>
                                <ul>
                                    <li>Take the carbohydrate value (28) and divide it by the portion size in grams (50)</li>
                                    <li>Divide your carbohydrate target (60) by the resulting value (0.56)</li>
                                    <li>Measure out the result by weight in grams (107.14)</li>
                                    <li>Eat 107.14 grams of chips now that you've conquered that scary math</li>
                                </ul>
                            </p>
                        </span>
                        {/* end of a _content-block */}
                    </div>
                    <div className="_content-block">
                        <h1><u>Food Frights</u></h1>
                        <br />
                        <span>
                            <p>
                                People often misattribute the need for strict regimented diet because of Type 2 Diabetes, but the reality is that you do not need to change your diet or your eating habits if you don't want to.
                                Would you probably benefit from making healthier choices? Obviously. That is completely unrelated to your disease.
                                The biggest distinction is that you may find dosing for meals stressful and choose to adjust your diet to reduce or even entirely eliminate your need for bolus insulin, it certainly is not a requirement to live a healthy and fulfilling life.
                                You will always be on basal insulin however, so you really should work to find what diet works best for you.
                                There are a few things to keep in mind when developing your diet. Daily calorie goals can encourage binging, instead look to hit a weekly calorie goal.
                                If you're looking to hit 2300 calories every day and are struggling, you may find yourself inhaling cakes and sweets at the end of the day just to hit your mark.
                                This way there is less pressure on your day to day intake and if you find yourself struggling to meet your weekly goals, just like with a basal rate test this isn't indicative of failure.
                                It's just a sign that we need to make a change in our diet. Eating a well balanced, satisfying, nourishing diet is how you are going to be able to eat without feeling guilt, and that's just true for everyone. But as a Diabetic, you'll see more stable blood sugar and hate your life less so that's cool too.
                                I'm going to really expand on this section in the reworked site so I will paint with broader strokes to better cover what's important to know. Your diet is important because your food is what provides your body with energy. What that food is made of determines how the body turns it into energy.
                                If it is a simple carbohydrate like glucose, sucrose, fructose or lactose, it is more bioavailable. That means the body is able to absorb it faster. Simple sugars will have a more profound effect on your blood sugar because they taken into the blood stream and cells faster.
                                In less fancy talk, simple sugars spike you hardest and fastest which is exactly why they're recommended for treating low events. If it is a complex carbohydrate like starches in rice, bread, pasta, cereal, etc.
                                The body needs to break down the larger chains of carbohydrates to make them accessible to the cells. The result of this is a slower but still profound effect on your blood sugar.
                                It might take a little bit longer to enter your blood stream but it still gets broken down into simple carbohydrates.
                                This means not only will you spike, but you will stay high for longer which is why it's recommended for after treating a low event with a simple carbohydrate.
                                The simple carbohydrate gets you out of the critical zone ASAP and the complex carbohydrate helps prevent you from falling back to critical levels as the simple carbohydrate wears off quickly.
                                If it is a protein or a fat, it will be broken down into polysaccharides (complex carbohydrates), glycerol (a sugar alcohol), fatty acids (which become ketones), and amino acids which are converted into glucose via the afforementioned gluconeogenesis.
                                Proteins and fats have a less profound effect on your blood sugar, but you will instead find that because of the complex digestive process that creates energy from these sources that the effect they have is prolonged and can cause a rise in blood sugar several hours after eating.
                                If you find yourself dosing the 'correct' amount and still find your blood sugar outside of normal levels you can try taking half of the dose at your normal time, and then the other half a little while later.
                                Spreading or 'Splitting your dose' this way helps cover the prolonged effect that is associated with fatty or protein heavy meals.
                                If it is a fiber, it is (generally speaking) undigestable and thus not turned into carbohydrates or energy.
                                Fiber helps slow digestion down which can help reduce the intensity of spikes.
                                If you're not opposed to drinking water that tastes like it might have shared a room with a grapefruit like two weeks ago, Metamucil makes a sugar-free variant.
                                In countries that have nutritional informtion laws, you will often find fiber listed under carbohydrates and that is because some fibers can be digestable.
                                These are called soluble fibers and can be found in apples, peas, oats, carrots and more. But generally speaking, the amounts are so minimal that we don't include them in our dosing calculations.
                                This means when you see fiber listed under carbohydrates, you should subtract it from the carbohydrate amount, the resulting amount is called Net Carbohydrates.
                                The Carb in Insulin-to-Carb ratio is in fact the Net Carbohydrates.
                                You will also sometimes see sugar-alcohols listed under carbohydrates and these can be found in products that claim to be low or zero sugar.
                                They are still carbohydrates that the body processes differently. It is also important to note that everyone reacts differently to these sugar alternatives, even the proper no-carb sweeteners like xylitol and sorbitol. 
                                It was recommended to me when I was diagnosed to start by subtracting half of the sugar alcohol content, and so far that has worked for me.
                                I will close this section off by saying that while sure there is research out there that suggest benefits that certain foods have a positive effect on your blood sugars, like cinammon or even pomegranates. 
                                These foods will not magically cure you. 
                                People will try to push these on you like a miracle cure but the unfortunate reality is that you're in this for the long haul and these people are either just misguided and well meaning or trying to prey on vulnerable people.
                            </p>
                        </span>
                        {/* end of a _content-block */}
                    </div>
                    {/* end of _page */}
                </div>
                {/* end of _base */}
            </div >
        )
    };
};

export default HomePage;