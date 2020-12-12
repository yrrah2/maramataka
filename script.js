const pageload = () => { 
        const dateNow = new Date();
        const firstMatariki = new Date("2020/07/13");
        const timeSinceFirst = dateNow.getTime() - firstMatariki.getTime();
        const daysSinceFirst = Math.ceil(timeSinceFirst / (1000 * 3600 * 24));
        const daysSinceLast = daysSinceFirst % 254;
        $("#day").text(daysSinceLast);
}

window.onload = pageload;
