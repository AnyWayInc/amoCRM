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
      settings: function () {
        var $modal_body = $(
            ".modal." + self.get_settings().widget_code + " .modal-body"
          ),
          $widget_settings = $modal_body.find(".widget_settings_block");
        let second_obj = [];
        let obj = APP.constant('account').cf;
        Object.keys(obj).forEach(function (key, index) {
          second_obj.push({
            id: index + 1,
            option: obj[key].NAME,
            idEl: obj[key].ID,
          });
        });
        
        $widget_settings.html(
          self.render(
            { ref: "/tmpl/controls/select.twig" },
            {
              name: "Ob",
              items: second_obj,
            },
          )
        );
        // control--select--button
        
        document.querySelector('.control--select--button').addEventListener('change',(e)=>{
          let input = e.currentTarget;
          console.log(input.value);
        })
        

        return true;
      },
      dpSettings: function () {},
      init: function () {
        // console.log(self.custom_fields_values);
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
        
          window.addEventListener("change", (e) => {
            let num1 = document.getElementsByName("CFV[1119109]")[0].value;

            let num2 = document.getElementsByName("CFV[1119111]")[0].value;

            document.getElementsByName("CFV[1119117]")[0].value =
              Number(num2) + Number(num1);
          });
        }
        return true;
      },
      bind_actions: function () {
        // if (AMOCRM.getWidgetsArea() == "leads_card") {
        //   // let btn = document.getElementById("allprod");
        //   window.addEventListener("change", (e) => {
        //     let num1 =
        //       // data.current_card.$form[0][10].attributes[3].value;
        //       document.getElementsByClassName(
        //         "linked-form__cf js-control-allow-numeric-negative text-input control-price_autosized"
        //       )[0].attributes[3].value;
        //     let num2 =
        //       // data.current_card.$form[0][11].attributes[3].value
        //       document.getElementsByClassName(
        //         "linked-form__cf js-control-allow-numeric-negative text-input control-price_autosized"
        //       )[1].attributes[3].value;
        //     // input1.value = Number(num1);
        //     // input2.value = Number(num2);
        //     document.getElementsByClassName(
        //       "linked-form__cf js-control-allow-numeric-negative text-input control-price_autosized"
        //     )[2].attributes[3].value = Number(num2)+Number(num1);
        //     console.log(document.getElementsByClassName(
        //       "linked-form__cf js-control-allow-numeric-negative text-input control-price_autosized"
        //     )[2].attributes[3].value );
        //   });

        // $("#allprod").on("click", function (e) {
        // $('#allprod').trigger('button:load:start');
        // $.ajax({
        //   url: 'https://sasaev2001.amocrm.ru/leads/detail/' + AMOCRM.constant('card_id') ,
        //   type: 'GET',
        //   success: function (data) {

        // self.getModal(
        //   "<input class='one linked-form__cf js-control-allow-numeric-negative text-input control-price_autosized' type='text'> <br> <input class='two linked-form__cf js-control-allow-numeric-negative text-input control-price_autosized' type='text'> <br> <input class='three linked-form__cf js-control-allow-numeric-negative text-input control-price_autosized' type='text'> <br> <button type='button' class='btn button-input    '>Отправить</button>"
        // );
        // let btn = document.getElementsByClassName("btn");
        // btn.addEventListener("click",  () => {
        // let input1 = document.getElementsByClassName("one").value;
        // let input2 = document.getElementsByClassName("two").value;
        // let input3 = document.getElementsByClassName("three");

        // input3.value = ;
        // });

        // for(let i = 0; i<self.custom_fields_values.length;i++){
        // if(self.custom_fields_values[i]){
        // console.log(self.custom_fields_values);
        // }
        // }
        // $('#allprod').trigger('button:load:stop');
        // },
        // error: function (jqXHR, textStatus, errorThrown) {
        //   self.getModal('<div>Error status ' + textStatus + '-' + jqXHR.status + '</div>');
        //   $('#allprod').trigger('button:load:stop');
        // }
        // });

        // });
        // }

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
