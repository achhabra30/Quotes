var btn = document.getElementById('button');
var quote = document.querySelector('.quote');
var author = document.querySelector('.author');
var quoteSource=[
		{
			quote: " 'Get it down. Take chances. It may be bad, but it's the only way you can do anything really good' ",
			name:"- William Faulkner"
	    },
	    {
	    	quote:" 'The first draft is just you telling yourself the story.' ",
	    	name:"- Terry Pratchett"
	    },
	    {
	    	quote:"'You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.'",
	    	name:"- Octavia E. Butler"
	    },
	    {
	    	quote:"'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.'",
	    	name:"- Thomas A. Edison"
	    },
	    {
	    	quote:"'The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.'",
	    	name:"- Confucius"
	    },
	    {
	    	quote:"'Don't watch the clock; do what it does. Keep going.'",
	    	name:"- Sam Levenson"
	    },
	    {
	    	quote:"'A creative man is motivated by the desire to achieve, not by the desire to beat others.'",
	    	name:"- Ayn Rand"
	    },
	    {
	    	quote:"'You can always edit a bad page. You can’t edit a blank page'",
	    	name:"- Jodi Picoult"
	    },
	    {
	    	quote:"'If there's a book that you want to read, but it hasn't been written yet, then you must write it.'",
	    	name:"- Toni Morrison"
	    },
	    {
	    	quote:"'Start where you are. Use what you have. Do what you can.'",
	    	name:"- Arthur Ashe"
	    },
	    {
	    	quote:"'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.'",
	    	name:"- Samuel Beckett"
	    },
	    {
	    	quote:"'Be yourself; everyone else is already taken.'",
	    	name:"- Oscar Wilde"
	    },
	    {
	    	quote:"'The purpose of our lives is to be happy.'",
	    	name:"— Dalai Lama"
	    },
	    {
	    	quote:"'Life is what happens when you’re busy making other plans.'",
	    	name:"— John Lennon"
	    },
	    {
	    	quote:"'Do not take life too seriously. You will never get out of it alive.'",
	    	name:"- Elbert Hubbard"
	    },
	    {
	    	quote:"'People who think they know everything are a great annoyance to those of us who do.'",
	    	name:"- Isaac Asimov"
	    },
	    {
	    	quote:"'Procrastination is the art of keeping up with yesterday.'",
	    	name:"- Don Marquis"
	    },
	    {
	    	quote:"'Get busy living or get busy dying.'",
	    	name:"— Stephen King"
	    },
	    {
	    	quote:"'The greatest glory in living lies not in never falling, but in rising every time we fall. '",
	    	name:"- Nelson Mandela"
	    },
	    {
	    	quote:"'The way to get started is to quit talking and begin doing. '",
	    	name:"- Walt Disney"
	    },
	    {
	    	quote:"'If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. '",
	    	name:"- James Cameron"
	    },
	    {
	    	quote:"'Life is what happens when you're busy making other plans.'",
	    	name:"- John Lennon"
	    },
	    {
	    	quote:"'Always remember that you are absolutely unique. Just like everyone else. '",
	    	name:"- Margaret Mead"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"- Dalai Lama"
	    },
			{
				quote:"'Always remember that you are absolutely unique. Just like everyone else. '",
				name:"- Margaret Mead"
			},
			{
	    	quote:"'Don't judge each day by the harvest you reap but by the seeds that you plant.'",
	    	name:"- Robert Louis Stevenson"
	    },
			{
	    	quote:"'The future belongs to those who believe in the beauty of their dreams. '",
	    	name:"- Eleanor Roosevelt"
	    },
			{
	    	quote:"'Spread love everywhere you go. Let no one ever come to you without leaving happier.'",
	    	name:"- Mother Teresa"
	    },
			{
	    	quote:"'You will face many defeats in life, but never let yourself be defeated.'",
	    	name:"- Maya Angelou"
	    },
			{
	    	quote:"'In the end, it's not the years in your life that count. It's the life in your years.'",
	    	name:"- Abraham Lincoln"
	    },
			{
	    	quote:"'Never let the fear of striking out keep you from playing the game. '",
	    	name:"- Babe Ruth"
	    },
			{
	    	quote:"'Life is either a daring adventure or nothing at all.'",
	    	name:"- Helen Keller"
	    },
			{
	    	quote:"'Many of life's failures are people who did not realize how close they were to success when they gave up.'",
	    	name:"- Thomas A. Edison"
	    },
			{
	    	quote:"'Life is really simple, but we insist on making it complicated.'",
	    	name:"- Confucius"
	    },
			{
	    	quote:"'In three words I can sum up everything I've learned about life: it goes on. '",
	    	name:"- Robert Frost"
	    },
			{
	    	quote:"'Love the life you live. Live the life you love.'",
	    	name:"- Bob Marley"
	    },
			{
	    	quote:"'Life is either a daring adventure or nothing at all. '",
	    	name:"- Helen Keller"
	    },
			{
	    	quote:"'Live as if you were to die tomorrow. Learn as if you were to live forever.'",
	    	name:"- Mahatma Gandhi"
	    },
			{
	    	quote:"'Do what you can, with what you have, where you are.'",
	    	name:"-  Theodore Roosevelt"
	    },
			{
	    	quote:"'If you cannot do great things, do small things in a great way.'",
	    	name:"- Napoleon Hill"
	    },
			{
	    	quote:"'If opportunity doesn’t knock, build a door.'",
	    	name:"- Milton Berle"
	    },
			{
	    	quote:"'Wise men speak because they have something to say; fools because they have to say something.'",
	    	name:"- Plato"
	    },
			{
				quote:"'Strive not to be a success, but rather to be of value.'",
				name:"- Albert Einstein"
			},
			{
	    	quote:"'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.'",
	    	name:"- Robert Frost"
	    },
			{
	    	quote:"'Do not let what you cannot do interfere with what you can do.'",
	    	name:"- John Wooden"
	    },
			{
	    	quote:"'I haven’t failed. I’ve just found 10,000 ways that won’t work.'",
	    	name:"- Thomas Edison"
	    },
			{
	    	quote:"'A journey of a thousand leagues begins beneath one’s feet.'",
	    	name:"-  Lao Tzu"
	    },
			{
	    	quote:"'Either you run the day, or the day runs you.'",
	    	name:"- Jim Rohn"
	    },
			{
	    	quote:"'Life shrinks or expands in proportion to one’s courage.'",
	    	name:"- Anais Nin"
	    },
			{
	    	quote:"'You must be the change you wish to see in the world.'",
	    	name:"- Mahatma Gandhi"
	    },
			{
	    	quote:"'Believe and act as if it were impossible to fail.'",
	    	name:"- Charles Kettering"
	    },
			{
	    	quote:"'The difference between ordinary and extraordinary is that little extra.'",
	    	name:"- Jimmy Johnson"
	    },
			{
	    	quote:"'The best way to predict the future is to invent it.'",
	    	name:"- Alan Kay"
	    },
			{
	    	quote:"'Everything has beauty, but not everyone can see.'",
	    	name:"- Confucius"
	    },
			{
	    	quote:"'How wonderful it is that nobody need wait a single moment before starting to improve the world.'",
	    	name:"- Anne Frank"
	    },
			{
	    	quote:"'Imagination is everything. It is the preview of life’s coming attractions.'",
	    	name:"-  Albert Einstein"
	    },
			{
	    	quote:"'Change your thoughts and you change your world.'",
	    	name:"- Norman Vincent"
	    },
			{
				quote:"'Remember that happiness is a way of travel, not a destination.'",
				name:"- Roy M. Goodman"
			},
			{
	    	quote:"'It is never too late to be what you might have been.'",
	    	name:"- George Eliot"
	    },
			{
	    	quote:"'A person who never made a mistake never tried anything new.'",
	    	name:"- Albert Einstein"
	    },
			{
	    	quote:"'The person who says it cannot be done should not interrupt the person who is doing it.'",
	    	name:"- Chinese Proverb"
	    },
			{
	    	quote:"'Great minds discuss ideas; average minds discuss events; small minds discuss people.'",
	    	name:"- Eleanor Roosevelt"
	    },
			{
	    	quote:"'You only live once, but if you do it right, once is enough.'",
	    	name:"- Mae West"
	    },
			{
	    	quote:"'If you tell the truth, you don’t have to remember anything.'",
	    	name:"- Mark Twain"
	    },
			{
	    	quote:"'The only thing worse than being blind is having sight but no vision.'",
	    	name:"- Helen Keller"
	    },
			{
	    	quote:"'To live is the rarest thing in the world. Most people exist, that is all.'",
	    	name:"- Oscar Wilde"
	    },
			{
	    	quote:"'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.'",
	    	name:"- Martin Luther King, Jr."
	    },
			{
	    	quote:"'The only thing we have to fear is fear itself.'",
	    	name:"- Franklin D. Roosevelt"
	    },
			{
	    	quote:"'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.'",
	    	name:"- Oprah Winfrey"
	    },
			{
	    	quote:"'Remember no one can make you feel inferior without your consent.'",
	    	name:"- Eleanor Roosevelt"
	    },
			{
	    	quote:"'For every minute you are angry you lose sixty seconds of happiness.'",
	    	name:"- Ralph Waldo Emerson"
	    },
			{
	    	quote:"'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.'",
	    	name:"- Lao Tzu"
	    },
			{
	    	quote:"'There are two ways of spreading light: to be the candle or the mirror that reflects it.'",
	    	name:"- Edith Wharton"
	    },
			{
	    	quote:"'The road to success and the road to failure are almost exactly the same.'",
	    	name:"- Colin R. Davis"
	    }
	];

btn.addEventListener('click', function() {
	// var sourceLength = quoteSource.length;
	// var randomNumber = Math.floor(Math.random()*sourceLength);
	$("#output").addClass("quote-container");
	$(".quote").addClass("quote-style");
	$(".author").addClass("author-style");

	var randomQuote = quoteSource[Math.floor(Math.random() * quoteSource.length)]
	quote.innerHTML = randomQuote.quote;
	author.innerHTML = randomQuote.name;
})
