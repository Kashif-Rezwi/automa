import PropTypes from 'prop-types';
import './editor.css';
import { Input } from 'antd';
import React, { Component, useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export class RepeaterOptions extends Component {
    onDragEnd(result) {
        if (!result.destination) return;
        const { source: { index: sourceIndex, droppableId: sourceDroppableId }, destination: { index: destinationIndex, droppableId: destinationDroppableId } } = result;
        // console.log({ sourceIndex, destinationIndex })
        if (sourceIndex === destinationIndex && sourceDroppableId === destinationDroppableId) return;
        const newOptions = [...this.props.value]
        const MovableItem = newOptions.splice(sourceIndex, 1)[0]
        newOptions.splice(destinationIndex, 0, MovableItem);
        this.props.onChange(newOptions)
    }

    render() {
        return (
            <div>
                <DragDropContext onDragEnd={this.onDragEnd.bind(this)} >
                    <Droppable droppableId="optionDroppable">
                        {(provided, snapshot) => (
                            <div
                                // id="be-pg-builder"
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {
                                    this.props.value.map((option, index) => {
                                        return (
                                            <Draggable key={`input-${index}`} draggableId={`input-${index}`} index={index} >
                                                {(provided, snapshot) => (
                                                    <div
                                                        className="be-OPtions-options"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                    >
                                                        {
                                                            !this.props.customItem ? (
                                                                <Input
                                                                    key={`input-${index}`}
                                                                    size={this.props.style && this.props.style.inputSize ? this.props.style.inputSize : "large"}
                                                                    placeholder={`Option ${index + 1}`}
                                                                    autoFocus={true}
                                                                    onChange={(e) => {
                                                                        const newOptions = this.props.value.map((opt, i) => index === i ? e.target.value : opt)
                                                                        this.props.onChange(newOptions)
                                                                    }}
                                                                    value={option}>
                                                                </Input>
                                                            ) : (
                                                                this.props.customItem(option, index)
                                                            )
                                                        }
                                                        <div
                                                            style={{ cursor: "grab" }}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={this.props.iconSize ? this.props.iconSize : "24"} height={this.props.iconSize ? this.props.iconSize : "24"} viewBox="0 0 24 24" fill="none">
                                                                <path d="M15 5H17V3H15V5ZM7 5H9V3H7V5ZM15 13H17V11H15V13ZM7 13H9V11H7V13ZM15 21H17V19H15V21ZM7 21H9V19H7V21Z" stroke="#AAAAAB" stroke-width="2" />
                                                            </svg>
                                                        </div>
                                                        <div
                                                            onClick={() => {
                                                                let newOptions = [...this.props.value]
                                                                if (newOptions.length === 1) {
                                                                    if (newOptions[0].length) newOptions = [""]
                                                                    else return
                                                                } else newOptions.splice(index, 1)
                                                                this.props.onChange(newOptions)
                                                            }}
                                                            style={{ cursor: "pointer" }}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={this.props.iconSize ? this.props.iconSize : "24"} height={this.props.iconSize ? this.props.iconSize : "24"} viewBox="0 0 24 24" fill="none">
                                                                <path d="M13.2143 12L19.3666 4.66641C19.4697 4.54453 19.383 4.35938 19.2236 4.35938H17.3533C17.2432 4.35938 17.1377 4.40859 17.065 4.49297L11.9908 10.5422L6.91659 4.49297C6.84628 4.40859 6.74081 4.35938 6.62831 4.35938H4.758C4.59863 4.35938 4.51191 4.54453 4.61503 4.66641L10.7674 12L4.61503 19.3336C4.59193 19.3608 4.57711 19.394 4.57233 19.4293C4.56755 19.4647 4.57301 19.5006 4.58806 19.533C4.60312 19.5653 4.62713 19.5926 4.65725 19.6117C4.68737 19.6308 4.72234 19.6408 4.758 19.6406H6.62831C6.73847 19.6406 6.84394 19.5914 6.91659 19.507L11.9908 13.4578L17.065 19.507C17.1353 19.5914 17.2408 19.6406 17.3533 19.6406H19.2236C19.383 19.6406 19.4697 19.4555 19.3666 19.3336L13.2143 12Z" fill="#AAAAAB" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        )
                                    })
                                }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                {
                    this.props.addItemButton ? (
                        this.props.addItemButton()
                    ) : (
                        <div
                            className="be-OPtions-add-option-btn"
                            onClick={() => this.props.onChange([...this.props.value, ""])}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.53125 2.375H8.46875C8.55208 2.375 8.59375 2.41667 8.59375 2.5V13.5C8.59375 13.5833 8.55208 13.625 8.46875 13.625H7.53125C7.44792 13.625 7.40625 13.5833 7.40625 13.5V2.5C7.40625 2.41667 7.44792 2.375 7.53125 2.375Z" fill="#BFC0C0" />
                                <path d="M2.75 7.40625H13.25C13.3333 7.40625 13.375 7.44792 13.375 7.53125V8.46875C13.375 8.55208 13.3333 8.59375 13.25 8.59375H2.75C2.66667 8.59375 2.625 8.55208 2.625 8.46875V7.53125C2.625 7.44792 2.66667 7.40625 2.75 7.40625Z" fill="#BFC0C0" />
                            </svg>
                            Add an Option
                        </div>
                    )
                }
            </div>
        )
    }
}