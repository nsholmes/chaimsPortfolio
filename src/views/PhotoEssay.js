import { JournalismPics, PhotoEssayPics } from '../utils';
import './PhotoEssay.css';
function PhotoEssay() {
    return (
        <div>
            <h1>Photo Essay</h1>
            <div className='essayWrapper'>
                <div className='essaySection'>
                    <div className='imgContainerCss'>
                        <img alt="" src={PhotoEssayPics[0]} />
                        <p>
                            Covid-19 has generated problems for everyone. Although people’s circumstances vary widely, it
                            all comes down to the same two troubles: food and isolation.
                        </p>
                    </div>

                    <p>Chaim Duffe-Holmes</p>
                </div>
                <div className='essaySection'>
                    <div className='imgContainerCss'>
                        <img alt="" src={PhotoEssayPics[1]} />
                    </div>
                    <p>
                        This is a good friend of mine, Zach, eating lunch alone. Before coronavirus, I would sit with him
                        at lunch along with another twelve or so kids; there were so many of us, we would have to push
                        multiple tables together just so we could fit. Now that we are living in this Covid world, our
                        school has two lunch periods and divides the kids based on their classes. The split lunches
                        have made it so my good friend has to sit alone at lunch every day with just his thoughts. When
                        we did online school, that gave us the chance to meet in small pods and do class together, or
                        go grab lunch with a couple of friends. Although we are back in person, I notice the isolation just
                        as much.
                    </p>
                </div>
                <div className='essaySection'>
                    <div style={{ display: 'flex', textAlign: 'center' }}>
                        <div className='imgContainerCss'>
                            <img alt="" src={JournalismPics[0][2]} style={{ width: '75%' }} />
                        </div>
                        <div className='imgContainerCss'>
                            <img alt="" src={JournalismPics[0][0]} style={{ width: '75%' }} />
                        </div>
                    </div>
                    <p>
                        I'm sure everyone can guess, the restaurant industry is really hurting during this pandemic. It
                        wasn’t until I spoke to veteran restaurant owner Qui Tran, who runs Mai Lee and Nudo House in
                        St. Louis, did I truly understand how much they were suffering. As soon as I sat down to talk to
                        him, the first thing he told me was how his business is down 60% from last year. “The cost of
                        doing business has gone up, but our capacity has gone down,” Tran said. Most restaurants are
                        wondering if they will even make it through the winter. Tran’s business has been completely
                        turned upside down. Before the virus, his restaurants tended to be 80% dine-in and 20%
                        carryout, but it has now turned into 20% dine-in and 80% carry out. It was sad to see so few
                        people at a restaurant in a prominent location, such as The Loop.
                    </p>
                </div>
                <div className='essaySection'>
                    <div style={{ display: 'flex', textAlign: 'center' }} className='imgContainerCss'>
                        <div>
                            <img alt="" style={{ width: '62%' }} src={JournalismPics[0][3]} />
                        </div>
                        <div>
                            <div>
                                <img alt="" style={{ width: '85%' }} src={JournalismPics[0][1]} />
                            </div>
                        </div>
                    </div>
                    <div>
                        Most restaurants are already clean, but they now have to spend even more money on
                        sanitizers, along with providing masks to the employees. Tran is also struggling to provide fair
                        hours amongst his crew. His team is mostly adults with families they need to provide for, so they
                        must take the CDC guidelines seriously and truly isolate outside of work. Luckily for them, Tran
                        has not had a single case at either of his restaurants.
                    </div>
                </div>
                <div className='essaySection'>
                    <div className='imgContainerCss'>
                        <img alt="" src={JournalismPics[2][0]} />
                    </div>
                    <p>
                        For the first time ever, my high school had a live stream of a sporting event, and not because
                        there was some extra room in the budget, I was the only spectator allowed because I brought a
                        camera. The wrestlers only have their team to cheer for them. As a former wrestler, I know
                        having your family and friends there to cheer you on while you are on the mat alone, makes a
                        huge difference. Now when they win, the referee is not allowed to raise their hand, and that was
                        my favorite part of winning a match. The pride you experience from getting your hand raised
                        and having all the spectators know that you fought hard for the pin has been stripped from the
                        wrestlers this year.
                    </p>
                </div>
                <div className='essaySection'>
                    <div className='imgContainerCss' style={{ textAlign: 'center' }}>
                        <img alt="" src={JournalismPics[1][2]} style={{ width: '60%' }} />
                    </div>
                    <div>High School wrestlers aren’t the only wrestlers in St. Louis who have been affected by the
                        pandemic. UFC champion Tyron Woodley, had to make the best of the unfortunate situation.
                        He’s done this by picking up cooking, as I’m sure many others have done also. Woodley, as well
                        as his family, were always busy before the pandemic; whether that was because of sports,
                        school, or work, they weren’t home very much. Now that they need to isolate to the best of their
                        ability for Tyron’s career, they can finally enjoy home-cooked meals regularly and the
                        circumstance has given Tyron a chance to really learn how to cook.</div>
                </div>
                <div className='essaySection'>
                    <div className='imgContainerCss'>
                        <img alt="" src={JournalismPics[1][1]} />
                    </div>
                    <div>
                        Woodley told me, “I have to be very serious about this stuff. Other people, if they get sick, they
                        can just work from home, but if I get sick, I can’t fight and provide for my family.” The fact that
                        we are currently living in a world where going to the grocery store can have serious
                        consequences on someone’s career is absolutely insane. That is why you see Woodley shining
                        a Ultraviolet-C light on all of his groceries. UV light can be used as a disinfectant; he also sprays
                        everything Lysol as an extra precaution.
                    </div>
                </div>
                <div className='essaySection'>
                    <div className='imgContainerCss' style={{ textAlign: 'center' }}>
                        <img alt="" src={JournalismPics[1][0]} style={{ width: '60%' }} />
                    </div>
                    <p>
                        Groceries stores are like the minefields of the coronavirus pandemic, trust me I work at one.
                        People dig through the products until they find the perfect bag of carrots, and who knows if
                        someone is sick. Some stores, like Trader Joe’s Brentwood, have people wait in a line so they
                        can limit the amount of people in the store, but they are the only grocery store I’ve seen do that.
                        Grocery stores are doing absolutely great right now, but at what cost? Do you think all the
                        customers, as well as the stores, take the necessary precautions? Would doing the same as
                        Tyron Woodley help lower our rates? Maybe since grocery stores are doing so well right now,
                        they should help lower the curve by selling Lysol and UV lights at a discount.
                    </p>
                </div>
                <div className='essaySection'>
                    <div className='imgContainerCss' style={{ textAlign: 'center' }}>
                        <img alt="" src={PhotoEssayPics[2]} style={{ width: '60%' }} />
                    </div>
                    <p>
                        At the start of the pandemic, emergency shelters were forced to drastically reduce their
                        capacity, so they could safely help people without the curve growing. Emergency meal
                        programs that hundreds relied on shutdown completely for lack of a safe way to operate. It has
                        always been hard for unhoused St. Louisans to get adequate food and shelter, but the
                        pandemic brought basic services to a halt when people needed them most. A small group of
                        friends of the unhoused now known as Tent Mission STL came together and found ways to
                        safely distribute tents to hundreds sleeping outside, so they had some shelter from weather and
                        a space to isolate, while the rest of us stayed in our homes for safety. Tent Mission also brought
                        food and water daily and continues to do so several days a week, now that some services have
                        reopened. They get all of their donations from friends and neighbors through Venmo. They get
                        donated hot meals from black and brown owned restaurants local to St. Louis who, despite the
                        strain on their businesses, have given and given. Every Sunday at 10:30 in the morning in front
                        of City Hall, Tent Mission volunteers, and the unhoused gather for their weekly “Family
                        Breakfast.” Tent Mission hands out breakfast food and coffee. They also give out winter coats,
                        socks, hats, and gloves, all packed into the back of two SUVs. Tent Mission STL has been
                        doing this every Sunday since the city shut down the large tent community that sprung up in the
                        early weeks of the pandemic in the same park across from City Hall, dispersing those living
                        there to places they were less noticed; places more isolated from those who do not want to see
                        the unhoused.
                    </p>
                </div>
                <div className='essaySection'>
                    <div className='imgContainerCss' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div>
                            <img alt="" src={PhotoEssayPics[3]} style={{ width: '85%' }} />
                        </div>
                        <div>
                            <img alt="" src={PhotoEssayPics[4]} />
                        </div>
                    </div>
                    <p>
                        Believe it or not, the unhoused members of our community that I talked with said they haven’t
                        been as hurt from the pandemic as you would think. Life for the unhoused comes with many
                        troubles that are life or death. COVID-19 is just another health risk on the list of health risks
                        faced daily. I spoke to a woman who will soon be housed; she was there volunteering, as she
                        regularly does, cleaning up trash during Tent Mission events. She told me that in the past six
                        months, people in need have become more dependent on the crutches of non-profit
                        organizations because more people have been donating and volunteering. Opportunities to help
                        themselves have shrunk as jobs disappear. I was amazed when I saw how much food there
                        was. They had boxes of warm doughnuts, breakfast sandwiches from McDonald's and gallons
                        of coffee. There was so much food. People are slow to take any more than they need because
                        others in need may come behind them. By the end of it, Tent Mission had leftover coffee and
                        doughnuts that an unhoused man took back to his emergency shelter to share with others. The
                        unhoused woman who made time to talk to me while she remained focused on cleaning up the
                        park shared her concern that the handouts have allowed people with very little income to cope
                        with the stress by spending what they have on things that can result to violence. The woman
                        told me that sometimes someone in an unhoused community won’t have enough money to pay
                        for their drugs and the dealers will start shooting, without caring about the other people around
                        that had nothing to do with it. Sometimes those other people around include children much
                        younger than me.
                    </p>
                </div>
                <div style={{ color: '#9c7fba' }}>
                    <h4>Artist Statement:</h4>
                    <p>
                        Being an essential worker at Trader Joe’s and a high school student, I have seen firsthand how
                        the pandemic has affected completing everyday tasks. That got me thinking about how nutrition
                        and social interaction are a part of everyone's life. This thought made me want to discover how
                        people are coping with the challenge to reach these basic necessities from all ends of the
                        spectrum. My goal with most of these photos was to make them seem as organic as possible,
                        so in order to get the picture of my friend at lunch I had to sneak into the lunchroom and hide
                        and capture the picture without him knowing. For the pictures with Tyron and Qui, I first talked to
                        them about how the new world has affected them. I then had them both go through their routine,
                        so I could capture photos of the moment. To achieve that with the less fortunate, I first observed
                        the scene, spoke to different people there, and took the photos based on the information I
                        gathered. I also made sure to keep the faces of the unhoused hidden to protect their privacy. As
                        you can see, acquiring basic necessities has changed for everyone, whether it’s been for better
                        or worse, that’s up to you.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PhotoEssay;