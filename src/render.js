
const introduce = (name, age) => {
    return `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME/CV`;
};

const renderHeader = (avatar, name, age, description) => {
    $("img").attr("src", avatar);
    $(".introduce").html(introduce(name, age));
    $(".describe").html(description);
}
 

const appendToUl = (year, title, description) => {
    return $("ul").append(
      `<li>
      <span class="year">${year}</span>
      <section class="describe-content">
        <span class="title">${title}</span>
        <p class="describe">${description}</p>
      </section>
    </li>`)
  }


export {renderHeader, appendToUl};