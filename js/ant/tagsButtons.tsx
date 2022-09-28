import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { PlusOutlined } from '@ant-design/icons';
import { Input, Tag, Tooltip } from 'antd';
import { addOpacity } from '../progers-menu-ant';
import '../../less/ant.less';

const ProgersPropsButtonsLineDiv = styled.div`
    width: 276px;
    display: flex;
    flex-direction: row;
    padding: 3px;
    border-radius: 4px;
    background-color: var(--ant-white-color);
    border: 1px solid #d9d9d9;
    height: auto;
    overflow-x: auto;
    &::-webkit-scrollbar{
        height: 6px;
    }
    &::-webkit-scrollbar-button{
        display: none;
    }
    &::-webkit-scrollbar-thumb{
        background-color: var(--ant-primary-color);
        border-radius: 2px;
    }
`;

export default function TagsButtons () {

    const [tags, setTags] = useState(['defaultButton']);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef(null);
    const editInputRef = useRef(null);
    useEffect(() => {
        if (inputVisible) {
        inputRef.current?.focus();
        }
    }, [inputVisible]);
    useEffect(() => {
        editInputRef.current?.focus();
    }, [inputValue]);

    const handleClose = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
        setTags([...tags, inputValue]);
        }

        setInputVisible(false);
        setInputValue('');
    };

    const handleEditInputChange = (e) => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setInputValue('');
    };

    return(
        <ProgersPropsButtonsLineDiv>
            {tags.map((tag, index) => {
                if (editInputIndex === index) {
                return (
                    <Input
                        ref={editInputRef}
                        key={tag}
                        size="small"
                        className="tag-input"
                        value={editInputValue}
                        onChange={handleEditInputChange}
                        onBlur={handleEditInputConfirm}
                        onPressEnter={handleEditInputConfirm}
                    />
                );
                }

                const isLongTag = tag.length > 20;
                const tagElem = (
                <Tag
                    className="edit-tag"
                    key={tag}
                    closable={index !== 0}
                    onClose={() => handleClose(tag)}
                >
                    <span
                    onDoubleClick={(e) => {
                        if (index !== 0) {
                        setEditInputIndex(index);
                        setEditInputValue(tag);
                        e.preventDefault();
                        }
                    }}
                    >
                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                    </span>
                </Tag>
                );
                return isLongTag ? (
                <Tooltip title={tag} key={tag}>
                    {tagElem}
                </Tooltip>
                ) : (
                tagElem
                );
            })}
            {inputVisible && (
                <Input
                    ref={inputRef}
                    type="text"
                    size="small"
                    className="tag-input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                    style={{borderRadius: '4px'}}
                />
            )}
            {!inputVisible && (
                <Tag className="add-button" onClick={showInput}>
                    <PlusOutlined /> Button
                </Tag>
            )}
        </ProgersPropsButtonsLineDiv>
    );
}