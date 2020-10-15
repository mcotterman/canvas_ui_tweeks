$(document).ready(function() {
    const hasPath = window.location.pathname.match(/^\/accounts\/(self|\d+)\/users\/(\d+)\/?$/i);
    if (hasPath != null) {
        const accountId = hasPath[1];
        const userId = hasPath[2];
        $.getJSON(`https://${location.host}/api/v1/users/${userId}/observees`, data => {
            if(data.length > 0) {
                console.log('Observee Data', data);
                let oHtml = "";
                data.forEach(item => {
                    oHtml += `<li ><a href="/accounts/${accountId}/users/${item.id}">${item.short_name}</a></li>`;
                });
                let outHtml = `<fieldset id="observee_information" class="responsive">
                <legend>
                  <h4 class="profileHeader">
                    Observee Information
                  </h4>
                </legend>
                <div class="observe">
                    <ul class="unstyled_list context_list">
                        ${oHtml}
                    </ul>
                </div>
              </fieldset>`;
              $('#login_information').after(outHtml);
            } else {
                console.log('No observee data');
            }
        });
    }
});


