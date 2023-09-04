import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css";
import $ from "jquery"; // Make sure jQuery is imported before Bootstrap
import "bootstrap"; // Import Bootstrap after jQuery
import "bootstrap-datepicker";

const Todo = () => {
  useEffect(() => {
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();

      const formatDate = (date) => {
        return (
          date.getDate() +
          "/" +
          (date.getMonth() + 1) +
          "/" +
          date.getFullYear()
        );
      };

      const currentDate = formatDate(new Date());

      $(".due-date-button").datepicker({
        format: "dd/mm/yyyy",
        autoclose: true,
        todayHighlight: true,
        startDate: currentDate,
        orientation: "bottom right",
      });

      $(".due-date-button").on("click", (event) => {
        $(".due-date-button")
          .datepicker("show")
          .on("changeDate", (dateChangeEvent) => {
            $(".due-date-button").datepicker("hide");
            $(".due-date-label").text(formatDate(dateChangeEvent.date));
          });
      });
    });
  }, []);

  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      {/* App title section */}
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <i className="fa fa-check bg-primary text-white rounded p-2"></i>
            <u>My Todo-s</u>
          </div>
        </div>
      </div>
      {/* Create todo section */}
      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div className="col">
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                placeholder="Add new .."
              />
            </div>
            <div className="col-auto m-0 px-2 d-flex align-items-center">
              <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">
                Due date not set
              </label>
              <i
                className="fa fa-calendar my-2 px-1 text-primary btn due-date-button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Set a Due date"
              ></i>
              <i
                className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Clear Due date"
              ></i>
            </div>
            <div className="col-auto px-0 mx-0 mr-2">
              <button type="button" className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 mx-4 border-black-25 border-bottom"></div>
      {/* View options section */}
      <div className="row m-1 p-3 px-5 justify-content-end">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Filter
          </label>
          <select className="custom-select custom-select-sm btn my-2">
            <option value="all" selected>
              All
            </option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
            <option value="has-due-date">Has due date</option>
          </select>
        </div>
        <div className="col-auto d-flex align-items-center px-1 pr-3">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Sort
          </label>
          <select className="custom-select custom-select-sm btn my-2">
            <option value="added-date-asc" selected>
              Added date
            </option>
            <option value="due-date-desc">Due date</option>
          </select>
          <i
            className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Ascending"
          ></i>
          <i
            className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Descending"
          ></i>
        </div>
      </div>
      {/* Todo list section */}
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {/* Todo Item 1 */}
          <div className="row px-3 align-items-center todo-item rounded">
            <div className="col-auto m-1 p-0 d-flex align-items-center">
              <h2 className="m-0 p-0">
                <i className="fa fa-square-o text-primary btn m-0 p-0"></i>
              </h2>
            </div>
            <div className="col px-1 m-1 d-flex align-items-center">
              <input
                type="text"
                className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                readOnly
                value="Example task 1"
              />
              <input
                type="text"
                className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none"
                value="Example task 1"
              />
            </div>
            <div className="col-auto m-1 p-0 px-3 d-none">
              <button
                type="button"
                className="btn btn-link text-success btn-lg save-todo"
              >
                <i className="fa fa-save"></i>
              </button>
            </div>
            <div className="col-auto m-1 p-0">
              <button
                type="button"
                className="btn btn-link text-success btn-lg edit-todo"
              >
                <i className="fa fa-edit"></i>
              </button>
            </div>
            <div className="col-auto m-1 p-0">
              <button
                type="button"
                className="btn btn-link text-danger btn-lg delete-todo"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
            <div className="col-auto m-1 p-0">
              <h4 className="m-0 p-0">
                <i
                  className="fa fa-calendar my-2 px-1 text-info btn due-date-button"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Set a Due date"
                ></i>
                <i
                  className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Clear Due date"
                ></i>
              </h4>
            </div>
            <div className="col-auto m-1 p-0">
              <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label">
                Due date not set
              </label>
            </div>
          </div>
          {/* Todo Item 2 */}
          <div className="row px-3 align-items-center todo-item rounded">
            <div className="col-auto m-1 p-0 d-flex align-items-center">
              <h2 className="m-0 p-0">
                <i className="fa fa-square-o text-primary btn m-0 p-0"></i>
              </h2>
            </div>
            <div className="col px-1 m-1 d-flex align-items-center">
              <input
                type="text"
                className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
                readOnly
                value="Example task 2"
              />
              <input
                type="text"
                className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none"
                value="Example task 2"
              />
            </div>
            <div className="col-auto m-1 p-0 px-3 d-none">
              <button
                type="button"
                className="btn btn-link text-success btn-lg save-todo"
              >
                <i className="fa fa-save"></i>
              </button>
            </div>
            <div className="col-auto m-1 p-0">
              <button
                type="button"
                className="btn btn-link text-success btn-lg edit-todo"
              >
                <i className="fa fa-edit"></i>
              </button>
            </div>
            <div className="col-auto m-1 p-0">
              <button
                type="button"
                className="btn btn-link text-danger btn-lg delete-todo"
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
            <div className="col-auto m-1 p-0">
              <h4 className="m-0 p-0">
                <i
                  className="fa fa-calendar my-2 px-1 text-info btn due-date-button"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Set a Due date"
                ></i>
                <i
                  className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Clear Due date"
                ></i>
              </h4>
            </div>
            <div className="col-auto m-1 p-0">
              <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label">
                Due date not set
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Todo items section */}
      <div className="p-2 mx-4 border-black-25 border-bottom"></div>
      <div className="row m-1 p-3 px-5 justify-content-end">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Items
          </label>
          <select className="custom-select custom-select-sm btn my-2">
            <option value="10" selected>
              10
            </option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="col-auto d-flex align-items-center px-1 pr-3">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Page
          </label>
          <select className="custom-select custom-select-sm btn my-2">
            <option value="1" selected>
              1
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Todo;
