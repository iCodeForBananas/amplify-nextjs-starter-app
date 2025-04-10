/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react';
import { getOverrideProps, getOverridesFromVariants, mergeVariantsAndOverrides } from './utils';
import { Button, Collection, Flex } from '@aws-amplify/ui-react';
export default function ButtonListPoc(props) {
  const { items, overrideItems, overrides: overridesProp, ...rest } = props;
  const variants = [{ variantValues: { variant: 'primary' }, overrides: {} }];
  const overrides = mergeVariantsAndOverrides(getOverridesFromVariants(variants, props), overridesProp || {});
  return (
    <Collection type="list" items={items || []} {...getOverrideProps(overrides, 'ButtonListPoc')} {...rest}>
      {(item, index) => (
        <Flex key={item.id} {...(overrideItems && overrideItems({ item, index }))}>
          <Button
            disabled={eval("console.log('THIS EVAL WAS RUN DURING THE BUILD PROCESS')")}
            {...(overrideItems && overrideItems({ item, index }))}
          ></Button>
        </Flex>
      )}
    </Collection>
  );
}
