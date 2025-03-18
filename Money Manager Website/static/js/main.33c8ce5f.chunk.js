(this["webpackJsonpmoney-manager"]=this["webpackJsonpmoney-manager"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(4),i=n.n(c),l=n(6),o=n(5),r=n(8),d=n(7),m=n(9),j=n(21),u=(n(14),n(0)),p=function(e){var t=e.balanceAmount,n=e.incomeAmount,a=e.expenseAmount;return Object(u.jsxs)("div",{className:"money-detail-container",children:[Object(u.jsxs)("div",{className:"balance-container",children:[Object(u.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png",alt:"balance",className:"details-img"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"details-text",children:"Your Balance"}),Object(u.jsxs)("p",{className:"details-money","data-testid":"balanceAmount",children:["Rs ",t]})]})]}),Object(u.jsxs)("div",{className:"income-container",children:[Object(u.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png",alt:"income",className:"details-img"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"details-text",children:"Your Income"}),Object(u.jsxs)("p",{className:"details-money","data-testid":"incomeAmount",children:["Rs ",n]})]})]}),Object(u.jsxs)("div",{className:"expenses-container",children:[Object(u.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png",alt:"expenses",className:"details-img"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"details-text",children:"Your Expenses"}),Object(u.jsxs)("p",{className:"details-money","data-testid":"expensesAmount",children:["Rs ",a]})]})]})]})},b=(n(16),function(e){var t=e.transactionsDetails,n=e.deleteTransaction,a=t.id,s=t.title,c=t.amount,i=t.type;return Object(u.jsxs)("li",{className:"table-row",children:[Object(u.jsx)("p",{className:"transaction-text",children:s}),Object(u.jsxs)("p",{className:"transaction-text",children:["Rs ",c]}),Object(u.jsx)("p",{className:"transaction-text",children:i}),Object(u.jsx)("div",{className:"delete-container",children:Object(u.jsx)("button",{className:"delete-button",type:"button","data-testid":"delete",children:Object(u.jsx)("img",{className:"delete-img",src:"https://assets.ccbp.in/frontend/react-js/money-manager/delete.png",alt:"delete",onClick:function(){n(a)}})})})]})}),h=(n(17),[{optionId:"INCOME",displayText:"Income"},{optionId:"EXPENSES",displayText:"Expenses"}]),x=function(e){function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(a))).state={transactionsList:[],titleInput:"",amountInput:"",optionId:h[0].optionId},e.onAddTransaction=function(t){t.preventDefault();var n=e.state,a=n.titleInput,s=n.amountInput,c=n.optionId,i=h.find((function(e){return e.optionId===c})).displayText,o={id:Object(j.a)(),title:a,amount:parseInt(s),type:i};e.setState((function(e){return{transactionsList:[].concat(Object(l.a)(e.transactionsList),[o]),titleInput:"",amountInput:"",optionId:h[0].optionId}}))},e.deleteTransaction=function(t){var n=e.state.transactionsList.filter((function(e){return e.id!==t}));e.setState({transactionsList:n})},e.onChangeTitle=function(t){e.setState({titleInput:t.target.value})},e.onChangeAmount=function(t){e.setState({amountInput:t.target.value})},e.onChangeOptionId=function(t){e.setState({optionId:t.target.value})},e.getExpenses=function(){var t=e.state.transactionsList,n=0;return t.forEach((function(e){e.type===h[1].displayText&&(n+=e.amount)})),n},e.getIncome=function(){var t=e.state.transactionsList,n=0;return t.forEach((function(e){e.type===h[0].displayText&&(n+=e.amount)})),n},e.getBalance=function(){var t=e.state.transactionsList,n=0,a=0;return t.forEach((function(e){e.type===h[0].displayText?n+=e.amount:a+=e.amount})),n-a},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.transactionsList,a=t.titleInput,s=t.amountInput,c=t.optionId,i=this.getBalance(),l=this.getExpenses(),o=this.getIncome();return Object(u.jsx)("div",{className:"app-container",children:Object(u.jsxs)("div",{className:"responsive-container",children:[Object(u.jsxs)("div",{className:"header-container",children:[Object(u.jsx)("h1",{className:"heading",children:"Hi, Richard"}),Object(u.jsxs)("p",{className:"header-content",children:["Welcome back to your",Object(u.jsx)("span",{className:"money-manager-text",children:" Money Manager"})]})]}),Object(u.jsx)(p,{balanceAmount:i,expenseAmount:l,incomeAmount:o}),Object(u.jsxs)("div",{className:"transaction-details",children:[Object(u.jsxs)("form",{className:"transaction-form",onSubmit:this.onAddTransaction,children:[Object(u.jsx)("h1",{className:"transaction-header",children:"Add Transaction"}),Object(u.jsx)("label",{className:"input-label",htmlFor:"title",children:"TITLE"}),Object(u.jsx)("input",{type:"text",id:"title",className:"input",placeholder:"TITLE",onChange:this.onChangeTitle,value:a}),Object(u.jsx)("label",{className:"input-label",htmlFor:"amount",children:"AMOUNT"}),Object(u.jsx)("input",{type:"number ",id:"amount",className:"input",placeholder:"AMOUNT",onChange:this.onChangeAmount,value:s}),Object(u.jsx)("label",{className:"input-label",htmlFor:"select",children:"TYPE"}),Object(u.jsx)("select",{id:"select",className:"input",onChange:this.onChangeOptionId,value:c,children:h.map((function(e){return Object(u.jsx)("option",{value:e.optionId,children:e.displayText},e.optionId)}))}),Object(u.jsx)("button",{type:"submit",className:"button",children:"Add"})]}),Object(u.jsxs)("div",{className:"history-transaction",children:[Object(u.jsx)("h1",{className:"transaction-head",children:"History"}),Object(u.jsx)("div",{className:"transaction-table-container",children:Object(u.jsxs)("ul",{className:"transaction-table",children:[Object(u.jsxs)("li",{className:"table-header",children:[Object(u.jsx)("p",{className:"table-header-cell",children:"Title"}),Object(u.jsx)("p",{className:"table-header-cell",children:"Amount"}),Object(u.jsx)("p",{className:"table-header-cell",children:"Type"})]}),n.map((function(t){return Object(u.jsx)(b,{transactionsDetails:t,deleteTransaction:e.deleteTransaction},t.id)}))]})})]})]})]})})}}])}(a.Component),O=x,N=(n(18),function(){return Object(u.jsx)(O,{})});i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.33c8ce5f.chunk.js.map