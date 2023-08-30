define(["jquery", "lib/components/base/modal"], function ($, Modal) {
  var CustomWidget = function () {
    var self = this;

    self.getModal = function (data) {
      new Modal({
        class_name: "modal-window",
        init: function ($modal_body) {
          $modal_body
            .trigger("modal:loaded")
            .html(data)
            .trigger("modal:centrify")
            .append(
              '<span class="modal-body__close"><span class="icon icon-modal-close"></span></span>'
            );
        },
        destroy: function () {},
      });
    };

    this.callbacks = {
      firsObj: "",
      secondObj: "",
      threeObj: "",

      arrayOfIDElements: function () {
        let second_obj = [];
        let obj = APP.constant("account").cf;
        Object.keys(obj).forEach(function (key, index) {
          second_obj.push({
            id: index ,
            option: obj[key].NAME,
            idEl: obj[key].ID,
          });
        });
        return second_obj;
      },

      settings: function () {
        var $modal_body = $(
            ".modal." + self.get_settings().widget_code + " .modal-body"
          ),
          $widget_settings = $modal_body.find(".widget_settings_block");
        let second_obj = [];
        let obj = APP.constant("account").cf;
        Object.keys(obj).forEach(function (key, index) {
          second_obj.push({
            id: index ,
            option: obj[key].NAME,
            idEl: obj[key].ID,
          });
        });

        $widget_settings.html(
          `${self.render(
            { ref: "/tmpl/controls/select.twig" },
            {
              name: "Ob",
              items: second_obj,
            }
          )} 
          ${self.render(
            { ref: "/tmpl/controls/select.twig" },
            {
              name: "Ob",
              items: second_obj,
            }
          )}
          ${self.render(
            { ref: "/tmpl/controls/select.twig" },
            {
              name: "Ob",
              items: second_obj,
            }
          )}
          ${self.render(
            { ref: "/tmpl/controls/button.twig" },
            {
              id: "getIDElem",
              name: "buttonproducts",
              text: self.i18n("settings").button_title,
            }
          )}`
        );

        document.getElementById("getIDElem").addEventListener("click", (e) => {
          let firsObj = document.querySelectorAll(".control--select--input")[0]
            .defaultValue;
          let secondObj = document.querySelectorAll(
            ".control--select--input"
          )[1].defaultValue;
          let theeObj = document.querySelectorAll(".control--select--input")[2]
            .defaultValue;

          localStorage.setItem("firsObj", firsObj)
          localStorage.setItem("secondObj", secondObj)
          localStorage.setItem("theeObj" , theeObj)
        });

        return true;
      },
      dpSettings: function () {},
      init: function () {
        return true;
      },
      render: function () {
        if (AMOCRM.getWidgetsArea() == "leads_card") {
          self.render_template(
            {
              render: self.render(
                { ref: "/tmpl/controls/button.twig" },
                {
                  id: "allprod",
                  name: "buttonproducts",
                  text: self.i18n("settings").button_title,
                }
              ),
            },
            { count: 10 }
          );
          let getArrayOfID = this.arrayOfIDElements();
          let firstElID = 0;
          let secondElID = 0;
          let threeElID = 0;
          for(let i=0; i<= getArrayOfID.length-1; i++){
            if(localStorage.getItem("firsObj") == getArrayOfID[i].id){
              firstElID = getArrayOfID[i].idEl;
            }
            if(localStorage.getItem("secondObj") == getArrayOfID[i].id){
              secondElID = getArrayOfID[i].idEl;
            }
            if(localStorage.getItem("theeObj") == getArrayOfID[i].id){
              threeElID = getArrayOfID[i].idEl;
            }
          }
          
          window.addEventListener("change", (e) => {
            let num1 = document.getElementsByName(`CFV[${firstElID}]`)[0].value;

            let num2 = document.getElementsByName(`CFV[${secondElID}]`)[0].value;

            document.getElementsByName(`CFV[${threeElID}]`)[0].value =
              Number(num2) + Number(num1);
          });
        }
        return true;
      },
      bind_actions: function () {
        return true;
      },
      onSave: function () {
        return true;
      },
    };
    return this;
  };
  return CustomWidget;
});
