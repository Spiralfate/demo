const getTestRatings = (rateScaleRange, rateMaxValue) => {
  const arr = new Array(rateScaleRange);
  
  return arr
    .fill(null)
    .map(rateLevel => Math.floor((Math.random()*rateMaxValue) + 1))
}

const getAverageRating = ratingArray => {
  return ratingArray
    .reduce((acc, cur, index) => acc + (cur * (index + 1)))
  / ratingArray.reduce((acc, cur) => acc + cur);
}

const getTestSubjects = maxAmount => {
  const amount = Math.floor((Math.random() * maxAmount));
  
  return new Array(maxAmount)
    .fill(null)
    .map((subj, index) => `Subject ${index + 1}`)
    .sort((a, b) => Math.random() > 0.5 ? a : b)
    .slice(amount);
};

const generateTestPostsData = postsAmount => {
  const arr = new Array(postsAmount).fill(null);
  
  return arr
    .fill(null)
    .map((item, index) => ({
      id: index + 1,
      title: `Post ${index + 1}`,
      ratings: getTestRatings(10, 1000),
      subjects: getTestSubjects(15),
    }));
};

const testPosts = generateTestPostsData(20)

//console.log(testPosts)

const enrichedTestPosts = testPosts.map(post => Object.assign(
  post, 
  { averageRating: getAverageRating(post.ratings).toFixed(2)}
));

console.log(enrichedTestPosts.map(item => item.averageRating))
