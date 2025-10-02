function Banner({nrGuesses, win,answer}) {

  const  content = win ?
    (
      <p>
        <strong>Congratulations!</strong> Got it in <strong>{nrGuesses} guesses</strong>.
      </p>
    ) : ( <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>)

  return (
    <div className={`${win? 'happy': 'sad'} banner`}>
      {content}
    </div>
  );
}

export default Banner;
